<template>
  <div class="faq-item" :class="{ 'faq-item--open': isOpen }">
    <div class="faq-item__head" @click="$emit('toggle')">
      <h3 class="faq-item__title">
        {{ item.question }}
      </h3>
      <button
        type="button"
        class="faq-item__btn"
        :aria-expanded="isOpen"
        aria-label="Toggle answer"
        @click.stop="$emit('toggle')"
      >
        <span
          class="faq-item__icon"
          :class="{ 'faq-item__icon--open': isOpen }"
          aria-hidden="true"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L16.5563 16.5563"
              stroke="#3F366C"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M16.5566 1.00293L1.00029 16.5593"
              stroke="#3F366C"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </button>
    </div>

    <div class="faq-item__body" :class="{ 'faq-item__body--open': isOpen }">
      <div class="faq-item__content">
        <p class="faq-item__text">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle"]);
</script>
