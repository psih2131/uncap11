<template>
  <div class="payment-form-field" :class="{ 'payment-form-field--error': error }">
    <span class="payment-form-field__label">{{ label }}</span>
    <div class="payment-form-field__radios">
      <label
        v-for="opt in options"
        :key="opt.value"
        class="payment-form-field__radio"
      >
        <input
          type="radio"
          :name="name"
          :value="opt.value"
          :checked="modelValue === opt.value"
          class="payment-form-field__radio-input"
          @change="$emit('update:modelValue', opt.value)"
        />
        <span class="payment-form-field__radio-dot" />
        <span class="payment-form-field__radio-label">{{ opt.label }}</span>
      </label>
    </div>
    <span v-if="error" class="payment-form-field__error">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Gender' },
  name: { type: String, default: 'gender' },
  error: { type: String, default: '' },
  options: {
    type: Array,
    default: () => [
      { value: 'female', label: 'Female' },
      { value: 'male', label: 'Male' },
    ],
  },
  modelValue: { type: String, default: '' },
});
defineEmits(['update:modelValue']);
</script>
