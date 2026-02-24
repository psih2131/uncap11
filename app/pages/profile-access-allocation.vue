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
          <h1 class="payment-sec__title">Profile Access Allocation</h1>
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
            label="Describe Your Intended Use"
            placeholder="Specific background, job titles, connection count, etc."
          />

          <div class="payment-sec__btn-row">
            <button
              type="submit"
              class="header__btn"
              :disabled="submitLoading"
            >
              <span class="header__btn-text">
                {{ submitLoading ? "Submitting…" : "Submit Request" }}
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
          </div>

          <p v-if="generalError" class="payment-sec__form-general-error">
            {{ generalError }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

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
const submitLoading = ref(false);

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

async function onSubmit() {
  if (!validate()) return;
  await serverRequest();
}

async function serverRequest() {
  submitLoading.value = true;
  generalError.value = "";

  let currentUrl;
  if (store.devMode) {
    currentUrl = store.urlApiStrapiDev;
  } else {
    currentUrl = store.urlApiStrapiProd;
  }

  if (!currentUrl) {
    generalError.value =
      "API URL is not configured. Check urlApiStrapiDev / urlApiStrapiProd in store.";
    submitLoading.value = false;
    return;
  }

  try {
    const response = await fetch(
      `${currentUrl}/api/leads-profile-access-allocations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            gender: form.value.gender,
            Quantity: String(form.value.quantity),
            Email: form.value.email,
            account_type: form.value.accountType,
            period_of_use: form.value.periodOfUse,
            textarea: form.value.otherDetails,
          },
        }),
      },
    );

    console.log("[Profile Access Allocation] response", response);

    if (response.ok) {
      store.modalController.status = true;
      store.modalController.name = "form-confirm-success";
    } else {
      store.modalController.status = true;
      store.modalController.name = "form-error";
    }
  } catch (e) {
    generalError.value = e?.message || "Network error. Please try again.";
    store.modalController.status = true;
    store.modalController.name = "form-error";
  } finally {
    submitLoading.value = false;
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
];

const periodOfUseOptionsPremium = [
  { value: "1m", label: "1 month" },
  { value: "2m", label: "2 month" },
  { value: "3m", label: "3 months", discount: 15 },
  { value: "4m", label: "4 month" },
  { value: "5m", label: "5 month" },
  { value: "6m", label: "6 months", discount: 25 },
  { value: "12m", label: "12 months", discount: 35 },
];

const periodOfUseOptionsTrial = [{ value: "1w", label: "1 week" }];

const periodOfUseOptionsComputed = computed(() => {
  return form.value.accountType === "trial"
    ? periodOfUseOptionsTrial
    : periodOfUseOptionsPremium;
});

watch(
  () => form.value.accountType,
  (type) => {
    if (type === "trial") {
      form.value.quantity = 1;
      form.value.periodOfUse = "1w";
    } else if (type === "premium" && form.value.periodOfUse === "1w") {
      form.value.periodOfUse = "1m";
    }
  },
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
});
</script>
