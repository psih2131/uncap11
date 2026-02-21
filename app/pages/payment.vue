<template>
  <section class="payment-sec">
    <div class="container">
      <div class="payment-sec__wrapper">
        <div class="payment-sec__back-row">
          <NuxtLink to="/" class="payment-sec__back" aria-label="to Home">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="payment-sec__back-text">Back to Home</span>
          </NuxtLink>
        </div>
        <div class="payment-sec__title-row">
          <h1 class="payment-sec__title">Complete <b>Your Order</b></h1>
        </div>

        <form class="payment-sec__form" @submit.prevent="onSubmit">
          <FormFieldGender
            v-model="form.gender"
            label="Gender"
            :options="genderOptions"
            :error="errors.gender"
          />
          <FormFieldQuantity
            v-model="form.quantity"
            label="Quantity"
            :placeholder="''"
            :error="errors.quantity"
            :disabled="form.accountType === 'trial'"
          />
          <FormFieldEmail
            v-model="form.email"
            label="Email"
            placeholder="Email address"
            :error="errors.email"
          />
          <FormFieldSelect
            v-model="form.accountType"
            label="Account Type"
            placeholder="Select Type"
            :options="accountTypeOptions"
            :error="errors.accountType"
          />
          <FormFieldSelect
            v-model="form.profileLocation"
            label="Profile Location"
            placeholder="Select Location"
            :options="profileLocationOptions"
            :error="errors.profileLocation"
          />
          <FormFieldSelect
            v-model="form.periodOfUse"
            label="Period of Use"
            placeholder="Select Period"
            :options="periodOfUseOptionsComputed"
            :error="errors.periodOfUse"
          />
          <FormFieldTextarea
            v-model="form.otherDetails"
            label="Other relevant details about the account"
            placeholder="Specific background, job titles, connection count, etc."
          />

          <div class="payment-sec__total">
            <div class="payment-sec__total-row">
              <span class="payment-sec__total-label">Accounts Amount</span>
              <span class="payment-sec__total-value">{{ accountsAmount }}</span>
            </div>
            <div class="payment-sec__total-row payment-sec__total-row--main">
              <span class="payment-sec__total-label">Total</span>
              <span class="payment-sec__total-value">$ {{ totalFixed }}</span>
            </div>
          </div>

          <div class="payment-sec__btn-row">
            <button
              type="submit"
              class="header__btn"
              :disabled="paymentLoading"
            >
              <span class="header__btn-text">
                {{ paymentLoading ? "Creating…" : "Pay in Crypto" }}
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 8L14.6569 12.6569L10 17.3137"
                  stroke="#0D0D0D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              class="header__btn payment-sec__btn-card"
              :disabled="paymentLoading"
              @click="onPayByCard"
            >
              <span class="header__btn-text">Pay by card</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 8L14.6569 12.6569L10 17.3137"
                  stroke="#0D0D0D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <p v-if="generalError" class="payment-sec__form-general-error">
            {{ generalError }}
          </p>

          <div class="payment-sec__form-data">
            <span class="payment-sec__form-data-label"
              >Form data (object):</span
            >
            <pre class="payment-sec__form-data-json">{{ formJson }}</pre>
            <template v-if="lastPayment">
              <span
                class="payment-sec__form-data-label"
                style="margin-top: 16px; display: block"
                >Last payment response:</span
              >
              <pre class="payment-sec__form-data-json">{{
                JSON.stringify(lastPayment, null, 2)
              }}</pre>
            </template>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const currentOneAccountPtice = ref(29);

const form = ref({
  gender: "",
  quantity: 1,
  email: "",
  accountType: "",
  profileLocation: "",
  periodOfUse: "",
  otherDetails: "",
});

const errors = ref({
  gender: "",
  quantity: "",
  email: "",
  accountType: "",
  profileLocation: "",
  periodOfUse: "",
});

const generalError = ref("");
const paymentLoading = ref(false);
const lastPayment = ref(null);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value) {
  if (!value || String(value).trim() === "") return "Field is required";
  if (!EMAIL_REGEX.test(String(value).trim()))
    return "Enter a valid email address";
  return "";
}

function validate() {
  generalError.value = "";
  errors.value.gender = !form.value.gender ? "Select gender" : "";
  errors.value.quantity =
    form.value.quantity === "" ||
    form.value.quantity === null ||
    Number(form.value.quantity) < 1
      ? "Enter quantity"
      : "";
  errors.value.email = validateEmail(form.value.email);
  errors.value.accountType = !form.value.accountType
    ? "Select account type"
    : "";
  errors.value.profileLocation = !form.value.profileLocation
    ? "Select profile location"
    : "";
  errors.value.periodOfUse = !form.value.periodOfUse
    ? "Select period of use"
    : "";

  const hasErrors = Object.values(errors.value).some(Boolean);
  if (hasErrors) {
    generalError.value = "Please fill in all required fields.";
  }
  return !hasErrors;
}

function onSubmit() {
  if (!validate()) return;
  paymentRequest();
}

function onPayByCard() {
  openPopup("pay-coming-soon");
}

async function paymentRequest() {
  paymentLoading.value = true;
  generalError.value = "";
  lastPayment.value = null;

  const orderId = `test-${Date.now()}`;

  try {
    const response = await $fetch("/api/nowpayments/pay-cripto", {
      method: "POST",
      body: {
        orderId,
        gender: form.value.gender,
        quantity: form.value.quantity,
        email: form.value.email,
        accountType: form.value.accountType,
        profileLocation: form.value.profileLocation,
        periodOfUse: form.value.periodOfUse,
        otherDetails: form.value.otherDetails,
        amount: Number(totalFixed.value),
        currency: "usd",
      },
    });
    // lastPayment.value = response;

    if (response?.invoice_url && response.invoice_url !== "") {
      window.open(response.invoice_url, "_blank", "noopener,noreferrer");
    } else {
      openPopup("pay-cancel");
      console.log("cancel");
    }

    console.log(response);
  } catch (e) {
    openPopup("pay-cancel");
    console.log("cancel");

    generalError.value =
      e?.data?.message || e?.message || "Payment request failed.";
  } finally {
    paymentLoading.value = false;
  }
}

const genderOptions = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

const accountTypeOptions = [
  { value: "premium", label: "Premium LinkedIn Profile", price: "26" },
  { value: "trial", label: "Trial Profile", price: "12" },
];

const profileLocationOptions = [
  { value: "us", label: "United States" },
  { value: "eu", label: "Europe" },
  { value: "ua", label: "Ukraine" },
];

const periodOfUseOptionsPremium = [
  { value: "1m", label: "1 month" },
  { value: "2m", label: "2 month" },
  { value: "3m", label: "3 months" },
  { value: "4m", label: "4 month" },
  { value: "5m", label: "5 month" },
  { value: "6m", label: "6 months" },
];

const periodOfUseOptionsTrial = [{ value: "1w", label: "1 week" }];

const periodOfUseOptionsComputed = computed(() => {
  return form.value.accountType === "trial"
    ? periodOfUseOptionsTrial
    : periodOfUseOptionsPremium;
});

const accountsAmount = computed(() => {
  if (form.value.accountType === "trial") return 1;
  const q = form.value.quantity;
  return q === "" || q === null ? 0 : Number(q);
});

const totalFixed = computed(() => {
  if (form.value.accountType === "trial") return "12.99";
  const amount = accountsAmount.value * +currentOneAccountPtice.value;
  return amount.toFixed(2);
});

const formJson = computed(() => JSON.stringify(form.value, null, 2));

const openPopup = (name) => {
  store.modalController.status = true;
  store.modalController.name = name;
};

watch(
  () => form.value.accountType,
  (type) => {
    if (type === "trial") {
      form.value.quantity = 1;
      form.value.periodOfUse = "1w";
    } else if (type === "premium" && form.value.periodOfUse === "1w") {
      form.value.periodOfUse = "1m";
    }
  }
);

onMounted(() => {
  if (store?.counterValue?.type) {
    form.value.accountType = store.counterValue.type;
  } else {
    form.value.accountType = "premium";
  }

  if (form.value.accountType === "trial") {
    form.value.quantity = 1;
    form.value.periodOfUse = "1w";
  } else {
    const count = store?.counterValue?.count;
    form.value.quantity =
      count != null && Number(count) >= 1 ? Number(count) : 1;
  }

  if (route.query.success) {
    openPopup("pay-confirm");
    console.log("success");
  }
  if (route.query.cancel) {
    openPopup("pay-cancel");
    console.log("cancel");
  }
});
</script>
