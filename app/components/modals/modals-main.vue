<template>
  <div class="modals__wrapper">
    <div class="modals-bg"></div>
    <Transition name="modal-pay" appear>
      <modalConfirm v-if="store.modalController.name == 'pay-confirm'" />
    </Transition>
    <Transition name="modal-pay" appear>
      <modalError v-if="store.modalController.name == 'pay-error'" />
    </Transition>

    <Transition name="modal-pay" appear>
      <modalRegistrConfirm
        v-if="store.modalController.name == 'registr-confirm'"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

import modalConfirm from "@/components/modals/pay-confirm.vue";

import modalError from "@/components/modals/pay-error.vue";

import modalRegistrConfirm from "@/components/modals/registr-confirm.vue";
</script>
