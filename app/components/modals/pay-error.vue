<template>
  <div class="modal-pay modal-pay--error">
    <div class="modal-pay__close" @click="closePopup()">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#3F366C"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="modal-pay__icon-wrapper">
      <svg
        width="80"
        height="83"
        viewBox="0 0 80 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.9856 14.4842C35.1534 8.70545 44.1982 8.70544 49.3661 14.4841L53.708 19.3392C54.9422 20.7193 56.4569 21.8199 58.1508 22.5672L64.11 25.1963C71.2029 28.3255 73.9978 36.9276 70.0989 43.6282L66.8232 49.2579C65.892 50.8582 65.3135 52.6389 65.1262 54.4808L64.4672 60.9608C63.683 68.6735 56.3656 73.9898 48.7881 72.3524L42.4217 70.9766C40.612 70.5856 38.7396 70.5856 36.93 70.9766L30.5635 72.3524C22.986 73.9898 15.6686 68.6735 14.8844 60.9608L14.2255 54.4808C14.0382 52.6389 13.4596 50.8582 12.5284 49.2579L9.25268 43.6282C5.35377 36.9276 8.14875 28.3255 15.2416 25.1963L21.2008 22.5672C22.8947 21.8199 24.4095 20.7193 25.6437 19.3393L29.9856 14.4842Z"
          fill="#E33A3A"
        />
        <path
          d="M62.7212 5.08502C63.6544 3.07563 66.5111 3.07563 67.4443 5.08502C67.8237 5.90195 68.5983 6.46478 69.4925 6.57315C71.6919 6.83972 72.5747 9.55658 70.952 11.065C70.2923 11.6783 69.9964 12.589 70.1696 13.4729C70.5958 15.647 68.2847 17.3261 66.3486 16.249C65.5615 15.8111 64.604 15.8111 63.8169 16.249C61.8808 17.3261 59.5697 15.647 59.9959 13.4729C60.1691 12.589 59.8732 11.6783 59.2135 11.065C57.5908 9.55658 58.4736 6.83972 60.673 6.57315C61.5672 6.46478 62.3419 5.90195 62.7212 5.08502Z"
          fill="#E33A3A"
        />
        <g clip-path="url(#clip0_152_933)">
          <path
            d="M47.4655 34.2789C43.218 29.9583 36.2721 29.899 31.9515 34.1466C27.6309 38.3941 27.5716 45.34 31.8192 49.6606C31.8719 49.7143 31.9253 49.7675 31.9792 49.8201L35.9116 53.4533C38.0139 55.5099 41.3717 55.5183 43.4842 53.4722L47.4655 49.7932C51.7495 45.5089 51.7495 38.5631 47.4655 34.2789ZM43.4054 44.3228C43.8016 44.7055 43.8126 45.3369 43.4299 45.733C43.0472 46.1292 42.4159 46.1402 42.0197 45.7575C42.0114 45.7495 42.0033 45.7413 41.9953 45.733L39.7084 43.4462L37.4215 45.7331C37.0253 46.1157 36.394 46.1048 36.0113 45.7086C35.638 45.3221 35.638 44.7094 36.0113 44.3229L38.2982 42.036L36.0113 39.7492C35.6151 39.3666 35.6042 38.7352 35.9868 38.339C36.3695 37.9428 37.0008 37.9319 37.397 38.3145C37.4053 38.3225 37.4135 38.3307 37.4215 38.339L39.7084 40.6259L41.9952 38.339C42.3779 37.9428 43.0093 37.9319 43.4054 38.3145C43.8015 38.6972 43.8126 39.3286 43.4299 39.7247C43.4219 39.733 43.4137 39.7412 43.4054 39.7492L41.1186 42.036L43.4054 44.3228Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_152_933">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(27.6758 31)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>

    <p class="modal-pay__title">Your payment was denied</p>
    <p class="modal-pay__subtitle">
      Sorry, we weren’t able to complete your payment at this time. Please try
      again later.
    </p>
    <div class="modal-pay__btn-row">
      <div class="modal-pay__bnt" @click="closePopup()">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="#0D0D0D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="modal-pay__bnt-text">Try Again</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from "vue";

import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const closePopup = () => {
  store.modalController.name = null;
  setTimeout(() => {
    store.modalController.status = false;
  }, 300);
};
</script>
