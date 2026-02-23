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
          <h1 class="payment-sec__title">Agency Bundle Application Form</h1>
        </div>

        <form class="payment-sec__form" @submit.prevent="onSubmit">
          <FormFieldText
            v-model="form.agencyName"
            label="Agency Name"
            placeholder="Enter your agency name"
            :error="errors.agencyName"
          />

          <FormFieldText
            v-model="form.contactPerson"
            label="Contact Person (Full Name)"
            placeholder="Full name"
            :error="errors.contactPerson"
          />

          <FormFieldEmail
            v-model="form.workEmail"
            label="Work Email"
            placeholder="Work email address"
            :error="errors.workEmail"
          />

          <FormFieldText
            v-model="form.agencyWebsite"
            label="Agency Website / LinkedIn"
            placeholder="Website or LinkedIn profile URL"
            :error="errors.agencyWebsite"
          />

          <FormFieldTextarea
            v-model="form.howUseAccounts"
            label="How will you use the 5 accounts?"
            placeholder="Briefly describe how you plan to use the accounts"
            :rows="3"
            :error="errors.howUseAccounts"
          />

          <div class="payment-sec__btn-row">
            <button type="submit" class="header__btn">
              <span class="header__btn-text">Get 10 Free Accounts</span>
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
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const form = ref({
  agencyName: "",
  contactPerson: "",
  workEmail: "",
  agencyWebsite: "",
  howUseAccounts: "",
});

const errors = ref({
  agencyName: "",
  contactPerson: "",
  workEmail: "",
  agencyWebsite: "",
  howUseAccounts: "",
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

  errors.value.agencyName =
    !form.value.agencyName || String(form.value.agencyName).trim() === ""
      ? "Enter your agency name"
      : "";
  errors.value.contactPerson =
    !form.value.contactPerson || String(form.value.contactPerson).trim() === ""
      ? "Enter full name"
      : "";
  errors.value.workEmail = validateEmail(form.value.workEmail);
  errors.value.agencyWebsite =
    !form.value.agencyWebsite || String(form.value.agencyWebsite).trim() === ""
      ? "Enter website or LinkedIn URL"
      : "";
  errors.value.howUseAccounts =
    !form.value.howUseAccounts ||
    String(form.value.howUseAccounts).trim() === ""
      ? "Please describe how you plan to use the accounts"
      : "";

  const hasErrors = Object.values(errors.value).some(Boolean);
  if (hasErrors) {
    generalError.value = "Please fill in all required fields.";
  }

  return !hasErrors;
}

const config = useRuntimeConfig();

function onSubmit() {
  if (!validate()) return;
  serverRequest();
}

async function serverRequest() {
  let currentUrl;

  if (store.devMode) {
    currentUrl = store.urlApiStrapiDev;
  } else {
    currentUrl = store.urlApiStrapiProd;
  }
  console.log("currentUrl", currentUrl);

  if (!currentUrl) {
    generalError.value =
      "API URL is not configured. Check NUXT_API_URL_DEV / NUXT_API_URL_PROD.";
    return;
  }

  try {
    const response = await fetch(`${currentUrl}/api/leads-agencies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          agency_name: form.value.agencyName,
          full_name: form.value.contactPerson,
          user_email: form.value.workEmail,
          website: form.value.agencyWebsite,
          text_message: form.value.howUseAccounts,
        },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      generalError.value = text || `Request failed (${response.status}).`;
      return;
    }
    store.agencyBundleFormDraft = null;
    openPopup("agency-confirm");
  } catch (e) {
    generalError.value = e?.message || "Network error. Please try again.";
  }
}

const openPopup = (name) => {
  store.modalController.status = true;
  store.modalController.name = name;
};

onMounted(() => {
  if (
    store.agencyBundleFormDraft &&
    typeof store.agencyBundleFormDraft === "object"
  ) {
    Object.assign(form.value, store.agencyBundleFormDraft);
  }
});

onBeforeUnmount(() => {
  store.agencyBundleFormDraft = { ...form.value };
});

const formJson = computed(() => JSON.stringify(form.value, null, 2));
</script>
