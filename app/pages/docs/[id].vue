<template>
  <div class="doc-page">
    <componentHeader />

    <main class="doc-sec">
      <div class="container">
        <div class="doc-sec__container">
          <template v-if="doc">
            <h1 class="doc-sec__title">{{ doc.title }}</h1>
            <p class="doc-sec__date-pill">
              Last updated:
              <span class="doc-sec__date-value">{{ doc.dateUpdate }}</span>
            </p>
            <div class="doc-sec__text" v-html="doc.text" />
          </template>
          <template v-else>
            <h1 class="doc-sec__title">Page not found</h1>
            <p class="doc-sec__text">This document does not exist.</p>
            <NuxtLink to="/" class="doc-sec__back">Back to home</NuxtLink>
          </template>
        </div>
      </div>
    </main>

    <componentFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { DOCS } from "@/data/docs";
import componentHeader from "@/components/header.vue";
import componentFooter from "@/components/footer.vue";

const route = useRoute();
const id = computed(() => (route.params.id && String(route.params.id)) || "");

const doc = computed(() => (id.value ? (DOCS[id.value] ?? null) : null));

definePageMeta({
  name: "docs-id",
});
</script>
