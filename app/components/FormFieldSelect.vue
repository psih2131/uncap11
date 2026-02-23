<template>
  <div class="payment-form-field" :class="{ 'payment-form-field--error': error }">
    <span class="payment-form-field__label">{{ label }}</span>
    <div
      class="payment-form-field__select"
      tabindex="0"
      :class="{ 'payment-form-field__select--open': isOpen }"
      @click="isOpen = !isOpen"
      @blur="isOpen = false"
    >
      <span
        class="payment-form-field__select-value"
        :class="{ 'payment-form-field__select-value--placeholder': !modelValue }"
      >
        {{ selectedLabel || placeholder }}
      </span>
      <span class="payment-form-field__select-chevron" />
      <div v-show="isOpen" class="payment-form-field__select-dropdown">
        <button
          v-for="opt in options"
          :key="opt.value"
          type="button"
          class="payment-form-field__select-option"
          :class="{ 'payment-form-field__select-option--active': modelValue === opt.value }"
          @mousedown.prevent="select(opt)"
        >
          <span>{{ opt.label }}</span>
          <span v-if="opt.discount != null" class="payment-form-field__select-option-sale">
            Sale {{ opt.discount }}%
          </span>
        </button>
      </div>
    </div>
    <span v-if="error" class="payment-form-field__error">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Select' },
  error: { type: String, default: '' },
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: { type: [String, Number], default: '' },
});
const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

const selectedLabel = computed(() => {
  const opt = props.options.find((o) => o.value === props.modelValue);
  return opt ? opt.label : '';
});

function select(opt) {
  emit('update:modelValue', opt.value);
  isOpen.value = false;
}
</script>
