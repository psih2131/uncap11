<template>
  <section class="payment-sec sing-up-sec">
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
          <h1 class="payment-sec__title">Sign Up</h1>
        </div>

        <form class="payment-sec__form" @submit.prevent="onSubmit">
          <FormFieldText
            v-model="form.fullName"
            label="Full Name"
            placeholder="Enter your Name"
            :error="errors.fullName"
          />

          <FormFieldEmail
            v-model="form.email"
            label="Work Email"
            placeholder="Email address"
            :error="errors.email"
          />

          <FormFieldPassword
            v-model="form.password"
            label="Password"
            placeholder="Your Password"
            :error="errors.password"
          />

          <FormFieldPassword
            v-model="form.confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            :error="errors.confirmPassword"
          />

          <div class="signup-sec__checkboxes">
            <label
              class="signup-checkbox"
              :class="{ 'signup-checkbox--error': errors.terms }"
            >
              <input
                v-model="form.terms"
                type="checkbox"
                class="signup-checkbox__input"
              />
              <span class="signup-checkbox__box">
                <span class="signup-checkbox__mark" />
              </span>
              <span class="signup-checkbox__label">
                I agree to the Terms of Service
              </span>
            </label>
            <span v-if="errors.terms" class="signup-checkbox__error">
              {{ errors.terms }}
            </span>

            <label
              class="signup-checkbox"
              :class="{ 'signup-checkbox--error': errors.refundPolicy }"
            >
              <input
                v-model="form.refundPolicy"
                type="checkbox"
                class="signup-checkbox__input"
              />
              <span class="signup-checkbox__box">
                <span class="signup-checkbox__mark" />
              </span>
              <span class="signup-checkbox__label">
                I agree to the Refund Policy
              </span>
            </label>
            <span v-if="errors.refundPolicy" class="signup-checkbox__error">
              {{ errors.refundPolicy }}
            </span>

            <label
              class="signup-checkbox"
              :class="{ 'signup-checkbox--error': errors.businessUse }"
            >
              <input
                v-model="form.businessUse"
                type="checkbox"
                class="signup-checkbox__input"
              />
              <span class="signup-checkbox__box">
                <span class="signup-checkbox__mark" />
              </span>
              <span class="signup-checkbox__label">
                I confirm the service will be used for legitimate business
                communication
              </span>
            </label>
            <span v-if="errors.businessUse" class="signup-checkbox__error">
              {{ errors.businessUse }}
            </span>
          </div>

          <div class="payment-sec__btn-row">
            <button type="submit" class="header__btn">
              <span class="header__btn-text"> Sign Up </span>
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
            <span class="payment-sec__form-data-label">
              Form data (object):
            </span>
            <pre class="payment-sec__form-data-json">{{ formJson }}</pre>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const form = ref({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
  refundPolicy: false,
  businessUse: false,
});

const errors = ref({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: "",
  refundPolicy: "",
  businessUse: "",
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

  errors.value.fullName =
    !form.value.fullName || String(form.value.fullName).trim() === ""
      ? "Enter your name"
      : "";
  errors.value.email = validateEmail(form.value.email);

  const passwordEmpty =
    !form.value.password || String(form.value.password).trim() === "";
  const confirmEmpty =
    !form.value.confirmPassword ||
    String(form.value.confirmPassword).trim() === "";

  errors.value.password = passwordEmpty ? "Enter password" : "";
  errors.value.confirmPassword = confirmEmpty ? "Confirm password" : "";

  if (!passwordEmpty && !confirmEmpty) {
    if (form.value.password !== form.value.confirmPassword) {
      errors.value.password = "Passwords must match";
      errors.value.confirmPassword = "Passwords must match";
    }
  }

  errors.value.terms = form.value.terms ? "" : "Required";
  errors.value.refundPolicy = form.value.refundPolicy ? "" : "Required";
  errors.value.businessUse = form.value.businessUse ? "" : "Required";

  const hasErrors = Object.values(errors.value).some(Boolean);
  if (hasErrors) {
    generalError.value = "Please fill in all required fields.";
  }

  return !hasErrors;
}

function onSubmit() {
  if (!validate()) return;
  openPopup("registr-confirm");
}

const openPopup = (name) => {
  store.modalController.status = true;
  store.modalController.name = name;
};

const formJson = computed(() => JSON.stringify(form.value, null, 2));
</script>
