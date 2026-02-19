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
            :options="periodOfUseOptions"
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
            <button type="submit" class="header__btn">
              <span class="header__btn-text"> Pay in Crypto </span>
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
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from "vue";

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
  // form is valid, proceed

  paymentRequest();
}

async function paymentRequest() {
  openPopup("pay-confirm");
}

const genderOptions = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

const accountTypeOptions = [
  { value: "core", label: "Core Profile Access", price: "26" },
  { value: "premium", label: "Premium Profile Access", price: "49" },
];

const profileLocationOptions = [
  { value: "us", label: "United States" },
  { value: "eu", label: "Europe" },
];

const periodOfUseOptions = [
  { value: "1m", label: "1 month" },
  { value: "3m", label: "3 months" },
  { value: "6m", label: "6 months" },
];

const accountsAmount = computed(() => {
  const q = form.value.quantity;
  return q === "" || q === null ? 0 : Number(q);
});

const totalFixed = computed(() => {
  const amount = accountsAmount.value * 31.5;
  return amount.toFixed(2);
});

const formJson = computed(() => JSON.stringify(form.value, null, 2));

const openPopup = (name) => {
  store.modalController.status = true;
  store.modalController.name = name;
};

onMounted(() => {
  if (store?.counterValue?.count != null) {
    form.value.quantity = store.counterValue.count;
  }
  if (store?.counterValue?.type) {
    form.value.accountType = store.counterValue.type;
  }
});
</script>
