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
          <h1 class="payment-sec__title">Get Free Trial</h1>
        </div>
        <p class="payment-sec__subtitle payment-sec__subtitle--desc">
          Get 1 free LinkedIn account for 2 weeks and test Uncap11 in a structured, safe way. Submit your details — we'll review and confirm access.
        </p>

        <form class="payment-sec__form" @submit.prevent="onSubmit">
          <FormFieldEmail
            v-model="form.workEmail"
            label="Work email"
            placeholder="Email address"
            :error="errors.workEmail"
          />
          <FormFieldText
            v-model="form.fullName"
            label="Full name"
            placeholder="Enter your name"
            :error="errors.fullName"
          />
          <FormFieldText
            v-model="form.website"
            label="Website / LinkedIn company page"
            placeholder="https://..."
            :error="errors.website"
          />
          <FormFieldSelect
            v-model="form.role"
            label="Your role"
            placeholder="Select role"
            :options="roleOptions"
            :error="errors.role"
          />

          <div class="signup-sec__checkboxes">
            <label
              class="signup-checkbox"
              :class="errors.testimonialAgree ? 'signup-checkbox--error' : ''"
            >
              <input
                v-model="form.testimonialAgree"
                type="checkbox"
                class="signup-checkbox__input"
              />
              <span class="signup-checkbox__box">
                <span class="signup-checkbox__mark" />
              </span>
              <span class="signup-checkbox__label">
                I agree to provide a short testimonial after the trial period.
              </span>
            </label>
            <span v-if="errors.testimonialAgree" class="signup-checkbox__error">
              {{ errors.testimonialAgree }}
            </span>
          </div>

          <div class="payment-sec__btn-row">
            <button
              type="submit"
              class="header__btn"
              :disabled="submitLoading"
            >
              <span class="header__btn-text">
                {{ submitLoading ? "Submitting…" : "Request Trial" }}
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
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const form = ref({
  workEmail: "",
  fullName: "",
  website: "",
  role: "",
  testimonialAgree: false,
});

const errors = ref({
  workEmail: "",
  fullName: "",
  website: "",
  role: "",
  testimonialAgree: "",
});

const generalError = ref("");
const submitLoading = ref(false);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const roleOptions = [
  { value: "founder_owner", label: "Founder / Owner" },
  { value: "sales_sdr", label: "Sales / SDR" },
  { value: "recruiter", label: "Recruiter" },
  { value: "agency_manager", label: "Agency Manager" },
  { value: "other", label: "Other" },
];

function validateEmail(value) {
  if (!value || String(value).trim() === "") return "Field is required";
  if (!EMAIL_REGEX.test(String(value).trim()))
    return "Enter a valid email address";
  return "";
}

function validate() {
  generalError.value = "";
  errors.value.workEmail = validateEmail(form.value.workEmail);
  errors.value.fullName =
    !form.value.fullName || String(form.value.fullName).trim() === ""
      ? "Field is required"
      : "";
  errors.value.website =
    !form.value.website || String(form.value.website).trim() === ""
      ? "Field is required"
      : "";
  errors.value.role = !form.value.role ? "Select your role" : "";
  errors.value.testimonialAgree = form.value.testimonialAgree
    ? ""
    : "Required";

  const hasErrors = Object.values(errors.value).some(Boolean);
  if (hasErrors) {
    generalError.value = "Please fill in all required fields.";
  }
  return !hasErrors;
}

function onSubmit() {
  if (!validate()) return;
  serverRequest();
}

function openPopup(name) {
  store.modalController.status = true;
  store.modalController.name = name;
}

async function serverRequest() {
  submitLoading.value = true;
  generalError.value = "";

  const currentUrl = store.devMode
    ? store.urlApiStrapiDev
    : store.urlApiStrapiProd;

  if (!currentUrl) {
    generalError.value =
      "API URL is not configured. Check urlApiStrapiDev / urlApiStrapiProd in store.";
    submitLoading.value = false;
    return;
  }

  try {
    const response = await fetch(`${currentUrl}/api/get-trial-forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          work_email: form.value.workEmail.trim(),
          full_name: form.value.fullName.trim(),
          website: form.value.website.trim(),
          role: form.value.role,
        },
      }),
    });

    if (response.ok) {
      openPopup("trial-request-confirm");
    } else {
      generalError.value = "Request failed. Please try again.";
    }
  } catch (e) {
    generalError.value = e?.message || "Network error. Please try again.";
  } finally {
    submitLoading.value = false;
  }
}
</script>

<style scoped>

</style>
