<template>
  <div class="payment-form-field" :class="{ 'payment-form-field--error': error }">
    <span class="payment-form-field__label">{{ label }}</span>
    <textarea
      :value="modelValue"
      class="payment-form-field__textarea"
      :placeholder="placeholder"
      :rows="rows"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="payment-form-field__error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  rows: { type: Number, default: 4 },
  error: { type: String, default: '' },
});
defineEmits(['update:modelValue']);
</script>
