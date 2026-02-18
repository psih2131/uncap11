<template>
  <div class="app-wrapper">
    <componentHeader />

    <slot />

    <componentFooter />
  </div>
</template>

<script setup>
//IMPORT
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";

import componentHeader from "@/components/header.vue";

import componentFooter from "@/components/footer.vue";
</script>
