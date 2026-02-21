<template>
  <div class="payment-form-field" :class="{ 'payment-form-field--error': error }">
    <span class="payment-form-field__label">{{ label }}</span>
    <input
      type="text"
      inputmode="numeric"
      :value="displayValue"
      class="payment-form-field__input"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onInput"
    />
    <span v-if="error" class="payment-form-field__error">{{ error }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: { type: String, default: 'Quantity' },
  placeholder: { type: String, default: '' },
  error: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' },
  disabled: { type: Boolean, default: false },
});
const emit = defineEmits(['update:modelValue']);

const displayValue = computed(() =>
  props.modelValue === '' || props.modelValue === null
    ? ''
    : String(props.modelValue)
);

function onInput(e) {
  const raw = e.target.value.replace(/\D/g, '');
  const num = raw === '' ? '' : (parseInt(raw, 10) || 0);
  emit('update:modelValue', num === '' ? '' : num);
}
</script>
