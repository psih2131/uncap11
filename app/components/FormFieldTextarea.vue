<template>
  <div class="payment-form-field">
    <span class="payment-form-field__label">{{ label }}</span>
    <textarea
      :value="modelValue"
      class="payment-form-field__textarea"
      :placeholder="placeholder"
      rows="4"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: { type: String, default: '' },
});
defineEmits(['update:modelValue']);
</script>
