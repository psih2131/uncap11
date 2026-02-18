<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Transition name="modals-bg">
      <modalsComponent v-if="store.modalController.status" />
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

import modalsComponent from "@/components/modals/modals-main.vue";
</script>
