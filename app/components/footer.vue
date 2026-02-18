<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <a href="" class="footer__logo">
          <img
            src="@/assets/images/footer-logo.png"
            alt=""
            class="footer__logo-img"
          />
        </a>

        <nav class="footer__nav">
          <ul class="footer__nav-ul">
            <li class="footer__nav-li">
              <a
                href="#about"
                class="footer__nav-link"
                @click.prevent="scrollToAnchor('#about')"
                >About</a
              >
            </li>
            <li class="footer__nav-li">
              <a
                href="#pricing"
                class="footer__nav-link"
                @click.prevent="scrollToAnchor('#pricing')"
                >Pricing</a
              >
            </li>
            <li class="footer__nav-li">
              <a
                href="#how-it-works"
                class="footer__nav-link"
                @click.prevent="scrollToAnchor('#how-it-works')"
                >How it works</a
              >
            </li>
            <li class="footer__nav-li">
              <a
                href="#trial"
                class="footer__nav-link"
                @click.prevent="scrollToAnchor('#trial')"
                >Trial</a
              >
            </li>
            <li class="footer__nav-li">
              <a
                href="#faq"
                class="footer__nav-link"
                @click.prevent="scrollToAnchor('#faq')"
                >FAQ</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="footer__down">
      <div class="container">
        <nav class="footer__down-nav">
          <ul class="footer__down-ul">
            <li class="footer__down-ul-element">
              <a href="" class="footer__down-ul-link">Refund Policy</a>
            </li>
            <li class="footer__down-ul-element">
              <a href="" class="footer__down-ul-link">Terms of Use</a>
            </li>
            <li class="footer__down-ul-element">
              <a href="" class="footer__down-ul-link">Privacy Policy</a>
            </li>
          </ul>
        </nav>
        <a
          href="#hero"
          class="footer__top-nav"
          @click.prevent="scrollToAnchor('#hero')"
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04815 10.588C5.04815 10.3072 4.94449 10.0379 4.75996 9.83932C4.57544 9.64074 4.32516 9.52919 4.06421 9.52919H1.17238C0.949547 9.57597 0.718534 9.5384 0.518505 9.42282C0.318477 9.30725 0.161743 9.1208 0.0748738 8.89507C-0.0119951 8.66934 -0.0236528 8.41823 0.0418769 8.18431C0.107407 7.95039 0.246091 7.74805 0.434419 7.6116L7.16069 0.374351C7.27097 0.255668 7.4019 0.161522 7.54599 0.0972907C7.69009 0.0330593 7.84453 0 8.00049 0C8.15646 0 8.3109 0.0330593 8.45499 0.0972907C8.59908 0.161522 8.73001 0.255668 8.84029 0.374351L15.5656 7.6116C15.7539 7.74805 15.8926 7.95039 15.9581 8.18431C16.0237 8.41823 16.012 8.66934 15.9251 8.89507C15.8383 9.1208 15.6815 9.30725 15.4815 9.42282C15.2815 9.5384 15.0505 9.57597 14.8276 9.52919H11.9358C11.6748 9.52919 11.4246 9.64074 11.24 9.83932C11.0555 10.0379 10.9518 10.3072 10.9518 10.588V16.9411C10.9518 17.222 10.8482 17.4913 10.6637 17.6899C10.4791 17.8884 10.2289 18 9.9679 18H6.0321C5.77114 18 5.52087 17.8884 5.33635 17.6899C5.15182 17.4913 5.04815 17.222 5.04815 16.9411V10.588Z"
              fill="#B3A3FF"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollToAnchor(href) {
  if (!href || !href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
</script>
