<template>
  <div class="modal-pay modal-pay--confirm">
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
          d="M29.9856 14.4842C35.1534 8.70549 44.1982 8.70548 49.3661 14.4842L53.708 19.3393C54.9422 20.7194 56.4569 21.8199 58.1508 22.5672L64.11 25.1963C71.2029 28.3255 73.9978 36.9276 70.0989 43.6283L66.8232 49.258C65.892 50.8582 65.3135 52.6389 65.1262 54.4809L64.4672 60.9608C63.683 68.6735 56.3656 73.9899 48.7881 72.3524L42.4217 70.9767C40.612 70.5856 38.7396 70.5856 36.93 70.9767L30.5635 72.3524C22.986 73.9899 15.6686 68.6735 14.8844 60.9608L14.2255 54.4809C14.0382 52.6389 13.4596 50.8582 12.5284 49.258L9.25268 43.6283C5.35377 36.9276 8.14875 28.3255 15.2416 25.1963L21.2008 22.5672C22.8947 21.8199 24.4095 20.7194 25.6437 19.3393L29.9856 14.4842Z"
          fill="#563AE3"
        />
        <path
          d="M62.7212 5.08502C63.6544 3.07563 66.5111 3.07563 67.4443 5.08502C67.8237 5.90195 68.5983 6.46478 69.4925 6.57315C71.6919 6.83972 72.5747 9.55658 70.952 11.065C70.2923 11.6783 69.9964 12.589 70.1696 13.4729C70.5958 15.647 68.2847 17.3261 66.3486 16.249C65.5615 15.8111 64.604 15.8111 63.8169 16.249C61.8808 17.3261 59.5697 15.647 59.9959 13.4729C60.1691 12.589 59.8732 11.6783 59.2135 11.065C57.5908 9.55658 58.4736 6.83972 60.673 6.57315C61.5672 6.46478 62.3419 5.90195 62.7212 5.08502Z"
          fill="#563AE3"
        />
        <path
          d="M46.6758 39L37.7383 49L33.6758 44.4545"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <p class="modal-pay__title">Coming Soon!</p>
    <p class="modal-pay__subtitle">
      We're currently working on adding card payments. This option will be
      available within the next few weeks.<br /><br />Stay tuned — it's coming
      soon.
    </p>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const closePopup = () => {
  store.modalController.name = null;
  setTimeout(() => {
    store.modalController.status = false;
  }, 300);
};
</script>
