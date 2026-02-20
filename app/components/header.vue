<template>
  <header
    class="header"
    :class="{ active: isHeaderHidden, scrolled: isScrolledPast }"
  >
    <div class="header__container">
      <NuxtLink to="/" class="header__logo">
        <img
          src="@/assets/images/header-logo.png"
          alt=""
          class="header__logo-img"
        />
      </NuxtLink>

      <nav class="header__header-nav">
        <ul class="header__header-nav-list">
          <!-- <li class="header__header-nav-element">
            <a
              href="#about"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'about',
              }"
              @click.prevent="scrollToAnchor('#about')"
              >About</a
            >
          </li> -->
          <li class="header__header-nav-element">
            <a
              href="#pricing"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'pricing',
              }"
              @click.prevent="scrollToAnchor('#pricing')"
              >Pricing</a
            >
          </li>

          <li class="header__header-nav-element">
            <a
              href="#affiliatе"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'affiliatе',
              }"
              @click.prevent="scrollToAnchor('#affiliatе')"
              >Affiliatе</a
            >
          </li>

          <li class="header__header-nav-element">
            <a
              href="#how-it-works"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active':
                  activeAnchor === 'how-it-works',
              }"
              @click.prevent="scrollToAnchor('#how-it-works')"
              >How it works</a
            >
          </li>
          <li class="header__header-nav-element">
            <a
              href="#trial"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'trial',
              }"
              @click.prevent="scrollToAnchor('#trial')"
              >Trial</a
            >
          </li>
          <li class="header__header-nav-element">
            <a
              href="#faq"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'faq',
              }"
              @click.prevent="scrollToAnchor('#faq')"
              >FAQ</a
            >
          </li>
        </ul>
      </nav>

      <div class="header__right">
        <NuxtLink to="/sing-up" class="header__btn">
          <span class="header__btn-text"> Get started </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 8L14.6569 12.6569L10 17.3137"
              stroke="#0D0D0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>

        <div
          ref="burgerRef"
          class="header__burger burger-meny"
          :class="{ active: activMobHeader }"
          @click="activMobHeader = !activMobHeader"
        >
          <div class="burger-meny__line burger-meny__line--1"></div>
          <div class="burger-meny__line burger-meny__line--2"></div>
        </div>
      </div>
    </div>

    <div
      ref="mobMenuRef"
      class="header__mob-meny"
      :class="{ active: activMobHeader }"
    >
      <nav class="header__header-nav">
        <ul class="header__header-nav-list">
          <!-- <li class="header__header-nav-element">
            <a
              href="#about"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'about',
              }"
              @click.prevent="scrollToAnchor('#about')"
              >About</a
            >
          </li> -->
          <li class="header__header-nav-element">
            <a
              href="#pricing"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'pricing',
              }"
              @click.prevent="scrollToAnchor('#pricing')"
              >Pricing</a
            >
          </li>
          <li class="header__header-nav-element">
            <a
              href="#affiliatе"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'affiliatе',
              }"
              @click.prevent="scrollToAnchor('#pricing')"
              >Affiliatе</a
            >
          </li>

          <li class="header__header-nav-element">
            <a
              href="#how-it-works"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active':
                  activeAnchor === 'how-it-works',
              }"
              @click.prevent="scrollToAnchor('#how-it-works')"
              >How it works</a
            >
          </li>
          <li class="header__header-nav-element">
            <a
              href="#trial"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'trial',
              }"
              @click.prevent="scrollToAnchor('#trial')"
              >Trial</a
            >
          </li>
          <li class="header__header-nav-element">
            <a
              href="#faq"
              class="header__header-nav-link"
              :class="{
                'header__header-nav-link--active': activeAnchor === 'faq',
              }"
              @click.prevent="scrollToAnchor('#faq')"
              >FAQ</a
            >
          </li>
        </ul>
      </nav>

      <button class="header__btn">
        <span class="header__btn-text"> Get started </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 8L14.6569 12.6569L10 17.3137"
            stroke="#0D0D0D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeAnchor = ref("");
const activMobHeader = ref(false);
const isHeaderHidden = ref(false);
const isScrolledPast = ref(false);
const mobMenuRef = ref(null);
const burgerRef = ref(null);
let lastScrollY = 0;

const ANCHOR_IDS = [
  "about",
  "pricing",
  "affiliatе",
  "how-it-works",
  "trial",
  "faq",
];
const VIEWPORT_OFFSET = 150;
const SCROLL_HIDE_THRESHOLD = 200;
const SCROLL_PAST_PX = 60;

function updateActiveAnchor() {
  if (typeof window === "undefined") return;
  let current = "";
  for (const id of ANCHOR_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    const inActiveZone = rect.top <= VIEWPORT_OFFSET && rect.bottom > 0;
    if (inActiveZone) {
      current = id;
    }
  }
  activeAnchor.value = current;
}

function updateHeaderVisibility() {
  if (typeof window === "undefined") return;
  const scrollY = window.scrollY;
  if (scrollY < SCROLL_HIDE_THRESHOLD) {
    isHeaderHidden.value = false;
  } else {
    if (scrollY > lastScrollY) {
      isHeaderHidden.value = true;
      activMobHeader.value = false;
    } else {
      isHeaderHidden.value = false;
      // activMobHeader.value = false;
    }
  }
  lastScrollY = scrollY;
}

function onScroll() {
  if (typeof window !== "undefined") {
    isScrolledPast.value = window.scrollY > SCROLL_PAST_PX;
  }
  updateActiveAnchor();
  updateHeaderVisibility();
}

function handleClickOutside(e) {
  if (
    !activMobHeader.value ||
    mobMenuRef.value?.contains(e.target) ||
    burgerRef.value?.contains(e.target)
  ) {
    return;
  }
  activMobHeader.value = false;
}

function scrollToAnchor(href) {
  activMobHeader.value = false;

  if (!href || !href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

onMounted(() => {
  lastScrollY = window.scrollY ?? 0;
  isScrolledPast.value = lastScrollY > SCROLL_PAST_PX;
  updateActiveAnchor();
  updateHeaderVisibility();
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("click", handleClickOutside);
});
</script>
