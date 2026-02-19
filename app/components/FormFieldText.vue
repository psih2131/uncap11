<template>
  <div class="payment-form-field" :class="{ 'payment-form-field--error': error }">
    <span class="payment-form-field__label">{{ label }}</span>
    <input
      :type="type"
      :value="modelValue"
      class="payment-form-field__input"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="payment-form-field__error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" },
  type: { type: String, default: "text" },
  modelValue: { type: String, default: "" },
});
defineEmits(["update:modelValue"]);
</script>

