<template>
  <div class="modals__wrapper">
    <div class="modals-bg" @click="closeModal"></div>
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

    <Transition name="modal-pay" appear>
      <modalHomeSale v-if="store.modalController.name == 'home-sale'" />
    </Transition>

    <Transition name="modal-pay" appear>
      <modalPayComingSoon
        v-if="store.modalController.name == 'pay-coming-soon'"
      />
    </Transition>

    <Transition name="modal-pay" appear>
      <modalAgencyConfirm v-if="store.modalController.name == 'agency-confirm'" />
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

import modalHomeSale from "@/components/modals/home-sale.vue";

import modalPayComingSoon from "@/components/modals/pay-coming-soon.vue";

import modalAgencyConfirm from "@/components/modals/agency-confirm.vue";

function closeModal() {
  store.modalController.name = null;
  setTimeout(() => {
    store.modalController.status = false;
  }, 300);
}
</script>
