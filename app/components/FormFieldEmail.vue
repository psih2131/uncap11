<template>
  <div class="payment-form-field" :class="{ 'payment-form-field--error': error }">
    <span class="payment-form-field__label">{{ label }}</span>
    <input
      type="email"
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
  label: { type: String, default: 'Email' },
  placeholder: { type: String, default: 'Email address' },
  error: { type: String, default: '' },
  modelValue: { type: String, default: '' },
});
defineEmits(['update:modelValue']);
</script>
