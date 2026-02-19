<template>
  <div class="payment-form-field" :class="{ 'payment-form-field--error': error }">
    <span class="payment-form-field__label">{{ label }}</span>
    <div class="payment-form-field__password">
      <input
        :type="internalType"
        :value="modelValue"
        class="payment-form-field__input payment-form-field__input--password"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        type="button"
        class="payment-form-field__password-toggle"
        :class="{ 'payment-form-field__password-toggle--active': internalType === 'text' }"
        @click="toggle"
        :aria-label="
          internalType === 'password' ? 'Show password' : 'Hide password'
        "
      >
        <svg
          class="payment-form-field__password-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.224 9.87744C20.4852 8.66763 19.5533 7.58698 18.4653 6.67838L20.7567 4.38692C21.0707 4.0618 21.0617 3.54373 20.7366 3.22974C20.4194 2.92342 19.9166 2.92342 19.5995 3.22974L17.1075 5.72498C15.5627 4.80744 13.7967 4.32919 12 4.34192C6.93338 4.34192 4.04613 7.81024 2.77601 9.87748C1.97571 11.1719 1.97571 12.8075 2.77601 14.102C3.51482 15.3118 4.44674 16.3924 5.53479 17.301L3.24333 19.5925C2.91821 19.9065 2.9092 20.4246 3.22319 20.7497C3.53718 21.0748 4.05529 21.0838 4.38037 20.7698C4.3872 20.7632 4.39391 20.7565 4.40051 20.7497L6.8982 18.252C8.44107 19.1694 10.205 19.6484 12 19.6375C17.0666 19.6375 19.9539 16.1692 21.224 14.1019C22.0243 12.8075 22.0243 11.1719 21.224 9.87744ZM7.08974 11.9897C7.0851 9.28233 9.27605 7.08382 11.9834 7.07918C13.0078 7.07742 14.007 7.39663 14.8407 7.99192L13.6524 9.18021C13.1535 8.87938 12.5826 8.71903 12 8.71619C10.1921 8.71619 8.72652 10.1818 8.72652 11.9897C8.72936 12.5722 8.88971 13.1432 9.19055 13.642L8.00225 14.8303C7.40887 14.002 7.08978 13.0086 7.08974 11.9897ZM12 16.9C10.9811 16.9 9.98778 16.5809 9.15943 15.9875L10.3477 14.7992C10.8466 15.1 11.4175 15.2604 12 15.2632C13.808 15.2632 15.2736 13.7976 15.2736 11.9897C15.2707 11.4072 15.1104 10.8363 14.8095 10.3374L15.9978 9.1491C17.5712 11.3524 17.0605 14.4139 14.8573 15.9873C14.0236 16.5826 13.0244 16.9018 12 16.9Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <span v-if="error" class="payment-form-field__error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" },
  modelValue: { type: String, default: "" },
});
defineEmits(["update:modelValue"]);

const internalType = ref("password");

function toggle() {
  internalType.value = internalType.value === "password" ? "text" : "password";
}
</script>

