<template>
  <componentHeader />

  <main class="main">
    <section class="banner-sec">
      <div class="container">
        <span class="banner-sec__offer">Limited offer</span>
        <NuxtLink to="/payment" class="banner-sec__link">
          <p class="banner-sec__text">
            Save $300/year — Get Profile with Premium for <b>$29.99/month</b>.
            March 2026 only.
          </p>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15M15 10L10 5M15 10L10 15"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <section class="hero-sec" id="hero">
      <div class="container">
        <div class="hero-sec__header">
          <div class="hero-sec__teg">
            Year of free LinkedIn Premium included
          </div>
          <h1 class="hero-sec__title">
            Get LinkedIn profiles <span><br /></span>
            <b>at $29.99/month</b>
          </h1>
          <p class="hero-sec__subtitle">
            Scale outbound volume, lower per-profile costs, and generate more
            leads — with LinkedIn profiles at 62% off, including a full year of
            LinkedIn Premium.
          </p>
          <div class="hero-sec__btn-row">
            <NuxtLink to="/payment" class="predistable-sec__btn">
              <span class="predistable-sec__btn-icon">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                    fill="#563AE3"
                  />
                </svg>
              </span>
              <span class="predistable-sec__btn-text">Request Access</span>
            </NuxtLink>

            <button class="hero-sec__trial-btn">
              <span class="hero-sec__trial-btn-text">
                Try for 1 week for $14
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3.00258 14.3862 3.95162 16.6738 5.63889 18.3611C7.32616 20.0484 9.61384 20.9974 12 21ZM12 6.75C12.2225 6.75 12.44 6.81598 12.625 6.9396C12.81 7.06322 12.9542 7.23892 13.0394 7.44448C13.1245 7.65005 13.1468 7.87625 13.1034 8.09448C13.06 8.31271 12.9528 8.51316 12.7955 8.6705C12.6382 8.82783 12.4377 8.93498 12.2195 8.97839C12.0012 9.02179 11.775 8.99952 11.5695 8.91437C11.3639 8.82922 11.1882 8.68502 11.0646 8.50002C10.941 8.31501 10.875 8.09751 10.875 7.875C10.875 7.57663 10.9935 7.29049 11.2045 7.07951C11.4155 6.86853 11.7016 6.75 12 6.75ZM11.25 10.5H12C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12V16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25C12.5511 17.25 12.3603 17.171 12.2197 17.0303C12.079 16.8897 12 16.6989 12 16.5V12H11.25C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5Z"
                  fill="#3F366C"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="hero-sec__cards-wrapper">
          <div
            class="hero-sec__cards-img-container"
            :class="{
              'hero-sec__cards-img-container--active': isHeroCardsScrolled,
            }"
          >
            <img
              src="@/assets/images/hero-cards.png"
              alt=""
              class="hero-sec__cards"
            />
          </div>

          <img
            src="@/assets/images/hero-shadow.png"
            alt=""
            class="hero-sec__shadow"
          />
        </div>

        <div class="hero-sec__cards-info-sub-sec">
          <div class="hero-sec__cards-info-sub-sec-header">
            <h2 class="header-title-box__title">
              Lifetime founding rates <b>for early partners</b> — March
              allocation only
            </h2>

            <NuxtLink to="/payment" class="predistable-sec__btn">
              <span class="predistable-sec__btn-icon">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                    fill="#563AE3"
                  />
                </svg>
              </span>
              <span class="predistable-sec__btn-text"
                >Learn our profile replacement policy</span
              >
            </NuxtLink>
          </div>
          <div class="hero-sec__cards-info-sub-sec-data">
            <div
              v-for="(card, index) in heroCards"
              :key="index"
              class="hero-card"
            >
              <div class="hero-card__wrapper">
                <div class="hero-card__ic-wrapper">
                  <img
                    :src="card.icon"
                    :alt="card.title"
                    class="hero-card__ic"
                  />
                </div>
                <p class="hero-card__title">
                  {{ card.title }}
                </p>
                <p class="hero-card__subtitle">
                  {{ card.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="plans-sec-v2">
      <div class="container">
        <div class="plans-sec-v2__trial-banner" id="trial">
          <div class="plans-sec-v2__trial-banner-wrapper">
            <p class="plans-sec-v2__subtitle">
              <span class="plans-sec-v2__subtitle-dot"></span>
              March Launch Window
            </p>
            <h3 class="plans-sec-v2__trial-title">
              First 250 Profiles at Founding Rates — 62% Off
              <div class="plans-sec-v2__trial-title-info">
                <div class="plans-sec-v2__trial-title-info-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3.00258 14.3862 3.95162 16.6738 5.63889 18.3611C7.32616 20.0484 9.61384 20.9974 12 21V21ZM12 6.75C12.2225 6.75 12.44 6.81598 12.625 6.9396C12.81 7.06322 12.9542 7.23892 13.0394 7.44448C13.1245 7.65005 13.1468 7.87625 13.1034 8.09448C13.06 8.31271 12.9528 8.51316 12.7955 8.6705C12.6382 8.82783 12.4377 8.93498 12.2195 8.97839C12.0012 9.02179 11.775 8.99952 11.5695 8.91437C11.3639 8.82922 11.1882 8.68502 11.0646 8.50002C10.941 8.31501 10.875 8.09751 10.875 7.875C10.875 7.57663 10.9935 7.29049 11.2045 7.07951C11.4155 6.86853 11.7016 6.75 12 6.75ZM11.25 10.5H12C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12V16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25C12.5511 17.25 12.3603 17.171 12.2197 17.0303C12.079 16.8897 12 16.6989 12 16.5V12H11.25C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5V10.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </h3>
            <div class="plans-sec-v2__btn-wrapper">
              <NuxtLink to="" class="plans-sec-v2__btn-v1">
                <span class="plans-sec-v2__btn-v1-text"
                  >Lock In Founding Pricing</span
                >
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
            </div>
          </div>
        </div>

        <div class="plans-sec-v2__price-wrapper" id="pricing">
          <div class="plans-sec-v2__price-main-info">
            <div class="plans-sec-v2__price-main-info-top">
              <p class="plans-sec-v2__price-main-info-title">
                Premium LinkedIn Profile Access
              </p>
              <div class="plans-sec-v2__price-main-info-old-price-row">
                <p class="plans-sec-v2__price-main-info-old-price">$79</p>
              </div>

              <p class="plans-sec-v2__price-main-info-new-price">
                <span class="plans-sec-v2__price-main-info-new-price-value"
                  >$29.99</span
                >
                <span class="plans-sec-v2__price-main-info-new-price-period"
                  >/month</span
                >
              </p>
            </div>
            <div class="plans-sec-v2__price-main-info-down">
              <p class="plans-sec-v2__price-main-info-down__text">
                12-Month LinkedIn Premium Included
                <span class="plans-sec-v2__price-main-info-down-info">
                  <span class="plans-sec-v2__price-main-info-down-info-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3.00258 14.3862 3.95162 16.6738 5.63889 18.3611C7.32616 20.0484 9.61384 20.9974 12 21V21ZM12 6.75C12.2225 6.75 12.44 6.81598 12.625 6.9396C12.81 7.06322 12.9542 7.23892 13.0394 7.44448C13.1245 7.65005 13.1468 7.87625 13.1034 8.09448C13.06 8.31271 12.9528 8.51316 12.7955 8.6705C12.6382 8.82783 12.4377 8.93498 12.2195 8.97839C12.0012 9.02179 11.775 8.99952 11.5695 8.91437C11.3639 8.82922 11.1882 8.68502 11.0646 8.50002C10.941 8.31501 10.875 8.09751 10.875 7.875C10.875 7.57663 10.9935 7.29049 11.2045 7.07951C11.4155 6.86853 11.7016 6.75 12 6.75ZM11.25 10.5H12C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12V16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25C12.5511 17.25 12.3603 17.171 12.2197 17.0303C12.079 16.8897 12 16.6989 12 16.5V12H11.25C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5V10.5Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </span>
              </p>
              <div class="plans-sec-v2__price-main-info-btn-wrapper">
                <NuxtLink to="" class="plans-sec-v2__btn-v1">
                  <span class="plans-sec-v2__btn-v1-text"
                    >Free replacement guarantee</span
                  >
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

                <NuxtLink to="" class="plans-sec-v2__btn-v2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="plans-sec-v2__btn-v2-text">Get 62% Off Now</span>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="plans-sec-v2__price-dop-info">
            <div class="plans-sec-v2__price-dop-info-wrapper">
              <p class="plans-sec-v2__price-dop-info-title">What’s Included</p>
              <ul class="plans-sec-v2__price-dop-info-ul">
                <li
                  v-for="(item, i) in plansPriceDopInfoList"
                  :key="i"
                  class="plans-sec-v2__price-dop-info-li"
                >
                  <span class="plans-sec-v2__price-dop-info-li-icon">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L4.125 9L1 5.36364"
                        stroke="#3F366C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span class="plans-sec-v2__price-dop-info-li-text">{{
                    item
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="plans-sec">
      <div class="container">
        <div class="plans-sec__price-wrapper" id="pricing">
          <div class="header-title-box">
            <div class="header-title-box__subtitle-row">
              <span class="header-title-box__subtitle-dot"></span>
              <p class="header-title-box__subtitle-text">Plans & Pricing</p>
            </div>

            <h2 class="header-title-box__title">
              Profiles Options <b>and Pricing</b>
            </h2>

          </div>

          <div class="plans-sec__cards">
            <div
              v-for="plan in pricingPlans"
              :key="plan.id"
              :class="[
                'plan-card',
                { 'plan-card--premium': plan.id === 'premium' },
              ]"
            >
              <div v-if="plan.id === 'premium'" class="plan-card__best-choice">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.7356 8.06862C2.30784 4.23349 4.54806 1.53611 8.74921 0C6.17678 3.33828 10.9424 6.95439 11.2055 10.4206C11.8214 9.36954 12.1713 7.96719 12.2404 6.09152C15.3905 11.0335 12.7784 19.111 5.84604 17.9497C5.20954 17.8439 4.59657 17.6425 4.03799 17.3426C1.50965 15.9932 0 13.0518 0 10.2427C0 8.45228 0.76585 6.85443 1.7566 5.58439C1.8889 6.82797 2.17113 7.75552 2.7356 8.06862Z"
                    fill="#E33A3A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.97612 13.6078C4.26171 11.763 4.3602 8.78342 6.36082 7.73828C6.37552 11.1633 9.74908 11.5999 9.12435 15.2557C9.70057 14.603 9.99162 13.5593 10.0431 12.7347C10.9574 14.8279 10.24 16.5022 8.93619 17.3548C4.97171 19.9478 1.55845 14.6912 3.82807 11.8101C3.89716 12.4539 4.68506 13.4476 4.97612 13.6078Z"
                    fill="white"
                  />
                </svg>
                Best choice
              </div>
              <div class="plan-card__top">
                <div class="plan-card__header">
                  <h3 class="plan-card__title">
                    {{ plan.title }}
                  </h3>
                  <p v-if="plan.subtitle" class="plan-card__subtitle">
                    {{ plan.subtitle }}
                  </p>
                  <div class="plan-card__price-row">
                    <div class="plan-card__price">
                      <span class="plan-card__price-value">
                        {{ plan.priceLabel }}
                      </span>
                      <span class="plan-card__price-period">
                        {{ plan.period }}
                      </span>
                    </div>

                    <div class="plan-card__counter">
                      <div
                        class="plan-card__counter-ar"
                        @click="decrementProfiles(plan)"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5L12 19M12 19L19 12M12 19L5 12"
                            stroke="#0D0D0D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        class="plan-card__counter-inp"
                        readonly=""
                        :value="plan.profiles"
                      />

                      <div
                        class="plan-card__counter-ar"
                        @click="incrementProfiles(plan)"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 19L12 5M12 5L5 12M12 5L19 12"
                            stroke="#0D0D0D"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="plan-card__body">
                  <div class="plan-card__claster">
                    <p class="plan-card__claster-title">
                      {{ plan.volumeTitle }}
                    </p>
                    <ul class="plan-card__claster-list">
                      <li
                        v-for="(volume, vIndex) in plan.volumeItems"
                        :key="vIndex"
                        class="plan-card__claster-list-element"
                      >
                        <span class="plan-card__claster-list-element-icon">
                          <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1L4.125 9L1 5.36364"
                              stroke="#3F366C"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span class="plan-card__claster-list-element-text">
                          {{ volume }}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="plan-card__claster">
                    <p class="plan-card__claster-title">
                      {{ plan.includesTitle }}
                    </p>
                    <ul class="plan-card__claster-list">
                      <li
                        v-for="(include, iIndex) in plan.includesItems"
                        :key="iIndex"
                        class="plan-card__claster-list-element"
                      >
                        <span class="plan-card__claster-list-element-icon">
                          <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 1L4.125 9L1 5.36364"
                              stroke="#3F366C"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span class="plan-card__claster-list-element-text">
                          {{ include }}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="plan-card__down">
                <button
                  class="plan-card__btn"
                  @click="payPageGo(plan.profiles, plan.id)"
                >
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

                  <span class="plan-card__btn-text">
                    {{ plan.buttonText }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="plans-sec__free-trial" id="trial">
          <div class="plans-sec__free-trial-row">
            <p class="plans-sec__free-trial-title">
              Make LinkedIn Your Most Predictable Growth Channel
            </p>
            <button class="plans-sec__free-trial-btn">
              <span class="plans-sec__free-trial-btn-text"
                >Start with a 7-Day Trial for $14
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3.00258 14.3862 3.95162 16.6738 5.63889 18.3611C7.32616 20.0484 9.61384 20.9974 12 21ZM12 6.75C12.2225 6.75 12.44 6.81598 12.625 6.9396C12.81 7.06322 12.9542 7.23892 13.0394 7.44448C13.1245 7.65005 13.1468 7.87625 13.1034 8.09448C13.06 8.31271 12.9528 8.51316 12.7955 8.6705C12.6382 8.82783 12.4377 8.93498 12.2195 8.97839C12.0012 9.02179 11.775 8.99952 11.5695 8.91437C11.3639 8.82922 11.1882 8.68502 11.0646 8.50002C10.941 8.31501 10.875 8.09751 10.875 7.875C10.875 7.57663 10.9935 7.29049 11.2045 7.07951C11.4155 6.86853 11.7016 6.75 12 6.75ZM11.25 10.5H12C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12V16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25C12.5511 17.25 12.3603 17.171 12.2197 17.0303C12.079 16.8897 12 16.6989 12 16.5V12H11.25C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5Z"
                  fill="#3F366C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="predistable-sec" id="about">
      <div class="container">
        <div class="predictable-outreach">
          <div class="header-title-box">
            <div class="header-title-box__subtitle-row">
              <span class="header-title-box__subtitle-dot"></span>
              <p class="header-title-box__subtitle-text">
                Predictable outreach
              </p>
            </div>

            <h2 class="header-title-box__title">
              Stable <b>LinkedIn Profile Environments</b> Are
              <span><br /></span> the Foundation of Consistent Outbound
            </h2>

            <p class="header-title-box__description">
              How we maintain long-term profile stability and reliable
              performance
            </p>
          </div>

          <div class="predictable-outreach__cards">
            <article
              v-for="(card, index) in cards"
              :key="index"
              class="po-card"
            >
              <div class="po-card__top">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="po-card__image"
                />
              </div>
              <div class="po-card__body">
                <h3 class="po-card__title">
                  {{ card.title }}
                </h3>
                <ul class="po-card__list">
                  <li
                    v-for="(item, i) in card.items"
                    :key="i"
                    class="po-card__list-element"
                  >
                    <span class="po-card__list-element-icon">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.542702 6.57363C0.440353 6.57398 0.340006 6.54492 0.253318 6.48982C0.166631 6.43472 0.0971619 6.35585 0.0529825 6.26236C0.00880307 6.16887 -0.00827337 6.0646 0.00373718 5.96168C0.0157477 5.85875 0.0563522 5.76139 0.120833 5.6809L5.47533 0.0945326C5.51549 0.0475859 5.57023 0.0158613 5.63054 0.00456612C5.69086 -0.00672909 5.75318 0.00307625 5.80727 0.0323727C5.86136 0.0616691 5.904 0.108716 5.92821 0.165791C5.95241 0.222865 5.95673 0.286577 5.94046 0.346467L4.90202 3.64352C4.8714 3.72651 4.86111 3.81578 4.87205 3.90368C4.88298 3.99157 4.91481 4.07547 4.96481 4.14817C5.0148 4.22087 5.08146 4.28021 5.15907 4.32109C5.23669 4.36198 5.32294 4.38318 5.41042 4.38289H9.19643C9.29878 4.38254 9.39913 4.4116 9.48581 4.4667C9.5725 4.5218 9.64197 4.60068 9.68615 4.69417C9.73033 4.78766 9.7474 4.89192 9.73539 4.99484C9.72338 5.09777 9.68278 5.19513 9.6183 5.27562L4.2638 10.862C4.22364 10.9089 4.16891 10.9407 4.10859 10.952C4.04827 10.9633 3.98595 10.9534 3.93186 10.9242C3.87777 10.8949 3.83513 10.8478 3.81093 10.7907C3.78672 10.7337 3.7824 10.6699 3.79867 10.6101L4.83711 7.313C4.86773 7.23001 4.87802 7.14074 4.86708 7.05285C4.85615 6.96495 4.82432 6.88105 4.77433 6.80835C4.72433 6.73565 4.65767 6.67631 4.58006 6.63543C4.50244 6.59455 4.41619 6.57334 4.32871 6.57363H0.542702Z"
                          fill="#3F366C"
                        />
                      </svg>
                    </span>

                    <span class="po-card__list-element-text">
                      {{ item }}
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <div class="predistable-sec__btn-row">
            <NuxtLink to="/payment" class="predistable-sec__btn">
              <span class="predistable-sec__btn-icon">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                    fill="#563AE3"
                  />
                </svg>
              </span>
              <span class="predistable-sec__btn-text"
                >Start Scaling Outreach</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </section> -->

    <section class="bandle-sec">
      <img
        class="bandle-sec__img bandle-sec__img--1"
        src="@/assets/images/bundle-card-1.png"
        alt=""
      />
      <img
        class="bandle-sec__img bandle-sec__img--2"
        src="@/assets/images/bundle-card-2.png"
        alt=""
      />
      <div class="container">
        <div class="bandle-sec__wrapper">
          <h2 class="bandle-sec__title">
            <b>Agency Bundle —</b> 5 Accounts Free for 1 Month
          </h2>
          <div class="bandle-sec__text-banner">
            Apply to receive 5 LinkedIn accounts free for 30 days (worth $400)
            in exchange for a short video testimonial and honest feedback about
            our service.
          </div>
          <p class="bandle-sec__subtitle">
            This offer is designed for agencies ready to actively use the
            accounts and share real insights about their experience.
          </p>
          <div class="bandle-sec__btn-wrapper">
            <NuxtLink to="/payment" class="predistable-sec__btn">
              <span class="predistable-sec__btn-icon">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                    fill="#563AE3"
                  />
                </svg>
              </span>
              <span class="predistable-sec__btn-text">Apply Now</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="referal-sec">
      <div class="container">
        <div class="referal-sec__header">
          <div class="header-title-box__subtitle-row">
            <span class="header-title-box__subtitle-dot"></span>
            <p class="header-title-box__subtitle-text">
              Join Our Referral Program
            </p>
          </div>

          <h2 class="header-title-box__title">
            <b>Earn up to 30%</b><span><br /></span> recurring commission on
            every user you refer
          </h2>

          <p class="header-title-box__description">
            Simple structure. Transparent tracking. Long-term payouts.
          </p>
        </div>
        <div class="referal-sec__wrapper">
          <div class="referal-sec__info-box">
            <p class="referal-sec__info-box-title">
              Here’s how the commission works. You earn:
            </p>
            <ul class="referal-sec__info-box-list">
              <li class="referal-sec__info-box-list-element">
                <span class="referal-sec__info-box-list-element-icon">
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.542702 6.57363C0.440353 6.57398 0.340006 6.54492 0.253318 6.48982C0.166631 6.43472 0.0971619 6.35585 0.0529825 6.26236C0.00880307 6.16887 -0.00827337 6.0646 0.00373718 5.96168C0.0157477 5.85875 0.0563522 5.76139 0.120833 5.6809L5.47533 0.0945326C5.51549 0.0475859 5.57023 0.0158613 5.63054 0.00456612C5.69086 -0.00672909 5.75318 0.00307625 5.80727 0.0323727C5.86136 0.0616691 5.904 0.108716 5.92821 0.165791C5.95241 0.222865 5.95673 0.286577 5.94046 0.346467L4.90202 3.64352C4.8714 3.72651 4.86111 3.81578 4.87205 3.90368C4.88298 3.99157 4.91481 4.07547 4.96481 4.14817C5.0148 4.22087 5.08146 4.28021 5.15907 4.32109C5.23669 4.36198 5.32294 4.38318 5.41042 4.38289H9.19643C9.29878 4.38254 9.39913 4.4116 9.48581 4.4667C9.5725 4.5218 9.64197 4.60068 9.68615 4.69417C9.73033 4.78766 9.7474 4.89192 9.73539 4.99484C9.72338 5.09777 9.68278 5.19513 9.6183 5.27562L4.2638 10.862C4.22364 10.9089 4.16891 10.9407 4.10859 10.952C4.04827 10.9633 3.98595 10.9534 3.93186 10.9242C3.87777 10.8949 3.83513 10.8478 3.81093 10.7907C3.78672 10.7337 3.7824 10.6699 3.79867 10.6101L4.83711 7.313C4.86773 7.23001 4.87802 7.14074 4.86708 7.05285C4.85615 6.96495 4.82432 6.88105 4.77433 6.80835C4.72433 6.73565 4.65767 6.67631 4.58006 6.63543C4.50244 6.59455 4.41619 6.57334 4.32871 6.57363H0.542702Z"
                      fill="#3F366C"
                    />
                  </svg>
                </span>
                <span class="referal-sec__info-box-list-element-text"
                  >Up to 30% recurring revenue on yearly subscriptions</span
                >
              </li>

              <li class="referal-sec__info-box-list-element">
                <span class="referal-sec__info-box-list-element-icon">
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.542702 6.57363C0.440353 6.57398 0.340006 6.54492 0.253318 6.48982C0.166631 6.43472 0.0971619 6.35585 0.0529825 6.26236C0.00880307 6.16887 -0.00827337 6.0646 0.00373718 5.96168C0.0157477 5.85875 0.0563522 5.76139 0.120833 5.6809L5.47533 0.0945326C5.51549 0.0475859 5.57023 0.0158613 5.63054 0.00456612C5.69086 -0.00672909 5.75318 0.00307625 5.80727 0.0323727C5.86136 0.0616691 5.904 0.108716 5.92821 0.165791C5.95241 0.222865 5.95673 0.286577 5.94046 0.346467L4.90202 3.64352C4.8714 3.72651 4.86111 3.81578 4.87205 3.90368C4.88298 3.99157 4.91481 4.07547 4.96481 4.14817C5.0148 4.22087 5.08146 4.28021 5.15907 4.32109C5.23669 4.36198 5.32294 4.38318 5.41042 4.38289H9.19643C9.29878 4.38254 9.39913 4.4116 9.48581 4.4667C9.5725 4.5218 9.64197 4.60068 9.68615 4.69417C9.73033 4.78766 9.7474 4.89192 9.73539 4.99484C9.72338 5.09777 9.68278 5.19513 9.6183 5.27562L4.2638 10.862C4.22364 10.9089 4.16891 10.9407 4.10859 10.952C4.04827 10.9633 3.98595 10.9534 3.93186 10.9242C3.87777 10.8949 3.83513 10.8478 3.81093 10.7907C3.78672 10.7337 3.7824 10.6699 3.79867 10.6101L4.83711 7.313C4.86773 7.23001 4.87802 7.14074 4.86708 7.05285C4.85615 6.96495 4.82432 6.88105 4.77433 6.80835C4.72433 6.73565 4.65767 6.67631 4.58006 6.63543C4.50244 6.59455 4.41619 6.57334 4.32871 6.57363H0.542702Z"
                      fill="#3F366C"
                    />
                  </svg>
                </span>
                <span class="referal-sec__info-box-list-element-text"
                  >12% recurring revenue on monthly subscriptions</span
                >
              </li>

              <li class="referal-sec__info-box-list-element">
                <span class="referal-sec__info-box-list-element-icon">
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.542702 6.57363C0.440353 6.57398 0.340006 6.54492 0.253318 6.48982C0.166631 6.43472 0.0971619 6.35585 0.0529825 6.26236C0.00880307 6.16887 -0.00827337 6.0646 0.00373718 5.96168C0.0157477 5.85875 0.0563522 5.76139 0.120833 5.6809L5.47533 0.0945326C5.51549 0.0475859 5.57023 0.0158613 5.63054 0.00456612C5.69086 -0.00672909 5.75318 0.00307625 5.80727 0.0323727C5.86136 0.0616691 5.904 0.108716 5.92821 0.165791C5.95241 0.222865 5.95673 0.286577 5.94046 0.346467L4.90202 3.64352C4.8714 3.72651 4.86111 3.81578 4.87205 3.90368C4.88298 3.99157 4.91481 4.07547 4.96481 4.14817C5.0148 4.22087 5.08146 4.28021 5.15907 4.32109C5.23669 4.36198 5.32294 4.38318 5.41042 4.38289H9.19643C9.29878 4.38254 9.39913 4.4116 9.48581 4.4667C9.5725 4.5218 9.64197 4.60068 9.68615 4.69417C9.73033 4.78766 9.7474 4.89192 9.73539 4.99484C9.72338 5.09777 9.68278 5.19513 9.6183 5.27562L4.2638 10.862C4.22364 10.9089 4.16891 10.9407 4.10859 10.952C4.04827 10.9633 3.98595 10.9534 3.93186 10.9242C3.87777 10.8949 3.83513 10.8478 3.81093 10.7907C3.78672 10.7337 3.7824 10.6699 3.79867 10.6101L4.83711 7.313C4.86773 7.23001 4.87802 7.14074 4.86708 7.05285C4.85615 6.96495 4.82432 6.88105 4.77433 6.80835C4.72433 6.73565 4.65767 6.67631 4.58006 6.63543C4.50244 6.59455 4.41619 6.57334 4.32871 6.57363H0.542702Z"
                      fill="#3F366C"
                    />
                  </svg>
                </span>
                <span class="referal-sec__info-box-list-element-text"
                  >Paid monthly</span
                >
              </li>

              <li class="referal-sec__info-box-list-element">
                <span class="referal-sec__info-box-list-element-icon">
                  <svg
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.542702 6.57363C0.440353 6.57398 0.340006 6.54492 0.253318 6.48982C0.166631 6.43472 0.0971619 6.35585 0.0529825 6.26236C0.00880307 6.16887 -0.00827337 6.0646 0.00373718 5.96168C0.0157477 5.85875 0.0563522 5.76139 0.120833 5.6809L5.47533 0.0945326C5.51549 0.0475859 5.57023 0.0158613 5.63054 0.00456612C5.69086 -0.00672909 5.75318 0.00307625 5.80727 0.0323727C5.86136 0.0616691 5.904 0.108716 5.92821 0.165791C5.95241 0.222865 5.95673 0.286577 5.94046 0.346467L4.90202 3.64352C4.8714 3.72651 4.86111 3.81578 4.87205 3.90368C4.88298 3.99157 4.91481 4.07547 4.96481 4.14817C5.0148 4.22087 5.08146 4.28021 5.15907 4.32109C5.23669 4.36198 5.32294 4.38318 5.41042 4.38289H9.19643C9.29878 4.38254 9.39913 4.4116 9.48581 4.4667C9.5725 4.5218 9.64197 4.60068 9.68615 4.69417C9.73033 4.78766 9.7474 4.89192 9.73539 4.99484C9.72338 5.09777 9.68278 5.19513 9.6183 5.27562L4.2638 10.862C4.22364 10.9089 4.16891 10.9407 4.10859 10.952C4.04827 10.9633 3.98595 10.9534 3.93186 10.9242C3.87777 10.8949 3.83513 10.8478 3.81093 10.7907C3.78672 10.7337 3.7824 10.6699 3.79867 10.6101L4.83711 7.313C4.86773 7.23001 4.87802 7.14074 4.86708 7.05285C4.85615 6.96495 4.82432 6.88105 4.77433 6.80835C4.72433 6.73565 4.65767 6.67631 4.58006 6.63543C4.50244 6.59455 4.41619 6.57334 4.32871 6.57363H0.542702Z"
                      fill="#3F366C"
                    />
                  </svg>
                </span>
                <span class="referal-sec__info-box-list-element-text"
                  >No caps, no limits</span
                >
              </li>
            </ul>
          </div>

          <div class="referal-sec__banner">
            <p class="referal-sec__banner-text">
              For example — if you refer 50 users on a $29/month plan, you earn
              $435 every month, as long as they stay active.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="fit-sec">
      <div class="container">
        <div class="fit-sec__header">
          <div class="header-title-box__subtitle-row">
            <span class="header-title-box__subtitle-dot"></span>
            <p class="header-title-box__subtitle-text">FIT OVERVIEW</p>
          </div>

          <h2 class="header-title-box__title">
            <b>LinkedIn Profiles</b> for Different Outbound Goals
          </h2>

          <NuxtLink to="/payment" class="predistable-sec__btn">
            <span class="predistable-sec__btn-icon">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                  fill="#563AE3"
                />
              </svg>
            </span>
            <span class="predistable-sec__btn-text"
              >Start Scaling Outreach</span
            >
          </NuxtLink>
        </div>
        <div class="fit-sec__cards">
          <div
            v-for="(fitCard, index) in fitCards"
            :key="index"
            class="fit-card"
          >
            <div class="fit-card__header">
              <h3 class="fit-card__title">
                {{ fitCard.title }}
              </h3>
              <p class="fit-card__subtitle">
                {{ fitCard.subtitle }}
              </p>
            </div>
            <div class="fit-card__body">
              <div class="fit-card__body-title">Best for:</div>
              <ul class="fit-card__list">
                <li
                  v-for="(item, i) in fitCard.items"
                  :key="i"
                  class="fit-card__list-element"
                >
                  <span class="fit-card__list-element-icon">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 1L4.125 9L1 5.36364"
                        stroke="#B3A3FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span class="fit-card__list-element-text">
                    {{ item }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="own-sec">
      <div class="container">
        <div class="own-sec__data">
          <div class="own-sec__header">
            <h2 class="header-title-box__title">
              <b>Get Full</b> Profile Ownership
            </h2>
            <p class="header-title-box__description">
              Secure long-term access by prepaying three months and transition
              the profile into your dedicated outbound asset
            </p>
          </div>

          <div class="own-sec__cards">
            <div
              v-for="(card, index) in ownCards"
              :key="index"
              class="own-card"
            >
              <div class="own-card__icon">
                <img
                  :src="card.image"
                  :alt="card.title"
                  class="own-card__icon-img"
                />
              </div>
              <div class="own-card__data">
                <p class="own-card__title">
                  {{ card.title }}
                </p>
                <p class="own-card__subtitle">
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>

          <div class="own-sec__btn-wrapper">
            <NuxtLink to="/payment" class="predistable-sec__btn">
              <span class="predistable-sec__btn-icon">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                    fill="#563AE3"
                  />
                </svg>
              </span>
              <span class="predistable-sec__btn-text"
                >Start Scaling Outreach</span
              >
            </NuxtLink>
          </div>
        </div>
        <div class="own-sec__img-wrapper">
          <img
            src="@/assets/images/ovn-cards.png"
            alt=""
            class="own-sec__img"
          />
        </div>
      </div>
    </section>

    <section class="process-sec" id="how-it-works">
      <div class="container">
        <div class="header-title-box">
          <div class="header-title-box__subtitle-row">
            <span class="header-title-box__subtitle-dot"></span>
            <p class="header-title-box__subtitle-text">PROCESS OVERVIEW</p>
          </div>

          <h2 class="header-title-box__title">
            How Our Managed
            <b
              >LinkedIn <span><br /></span> Access Service</b
            >
            Works
          </h2>
          <!-- 
        <p class="header-title-box__description">
          How we maintain long-term profile stability and reliable performance
        </p> -->
        </div>

        <div class="process-sec__cards">
          <div
            v-for="(card, index) in processCards"
            :key="index"
            class="process-card"
          >
            <div class="process-card__img-wrapper">
              <img
                :src="card.image"
                :alt="card.title"
                class="process-card__img"
              />
            </div>
            <div class="process-card__body">
              <h3 class="process-card__title">
                {{ card.title }}
              </h3>
              <p class="process-card__text">
                {{ card.text }}
              </p>
            </div>
          </div>
        </div>

        <div class="process-sec__btn-row">
          <NuxtLink to="/payment" class="predistable-sec__btn">
            <span class="predistable-sec__btn-icon">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                  fill="#563AE3"
                />
              </svg>
            </span>
            <span class="predistable-sec__btn-text"
              >Start Scaling Outreach</span
            >
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="included-sec">
      <div class="container">
        <div class="included-sec__header">
          <div class="header-title-box__subtitle-row">
            <span class="header-title-box__subtitle-dot"></span>
            <p class="header-title-box__subtitle-text">WHAT’S INCLUDED</p>
          </div>

          <h2 class="header-title-box__title">
            <b>Outbound Done Right</b>
          </h2>

          <p class="header-title-box__description">
            We provide hands-on guidance, operational safeguards, and proven
            best practices to help you run LinkedIn outreach responsibly and
            consistently — while protecting long-term profile stability
          </p>
        </div>

        <div class="included-sec__cards">
          <div
            v-for="(card, index) in includedCards"
            :key="index"
            class="included-card"
          >
            <div class="included-card__wrapper">
              <div class="included-card__icon-wrapper">
                <img
                  :src="card.icon"
                  :alt="card.title"
                  class="included-card__icon"
                />
              </div>
              <p class="included-card__title">
                {{ card.title }}
              </p>
              <p class="included-card__subtitle">
                {{ card.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="partners-sec">
      <div class="container">
        <div class="partners-sec__header">
          <div class="header-title-box__subtitle-row">
            <span class="header-title-box__subtitle-dot"></span>
            <p class="header-title-box__subtitle-text">
              Run your accounts on the tools that fit your workflow
            </p>
          </div>
        </div>

        <div class="partners-sec__row">
          <div class="partner-element">
            <img src="@/assets/images/pr1.png" alt="" />
          </div>

          <div class="partner-element">
            <img src="@/assets/images/pr2.png" alt="" />
          </div>

          <div class="partner-element">
            <img src="@/assets/images/pr3.png" alt="" />
          </div>

          <div class="partner-element">
            <img src="@/assets/images/pr4.png" alt="" />
          </div>

          <div class="partner-element">
            <img src="@/assets/images/pr5.png" alt="" />
          </div>

          <div class="partner-element">
            <img src="@/assets/images/pr6.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="why-sec">
      <div class="container">
        <div class="why-sec__wrapper">
          <div class="why-sec__info">
            <div class="header-title-box__subtitle-row">
              <span class="header-title-box__subtitle-dot"></span>
              <p class="header-title-box__subtitle-text">why us</p>
            </div>

            <h2 class="header-title-box__title">Accounts that build trust</h2>

            <p class="header-title-box__description">
              Thoroughly filled profiles, real photos, and authentic details
              make every account ready for running outbound
            </p>
          </div>
          <img
            src="@/assets/images/why-card-1.png"
            alt=""
            class="why-sec__card-img-1"
          />
          <img
            src="@/assets/images/why-card-2.png"
            alt=""
            class="why-sec__card-img-2"
          />
        </div>
      </div>
    </section>

    <section class="faq-sec" id="faq">
      <div class="container">
        <div class="faq-sec__header">
          <div class="header-title-box__subtitle-row">
            <span class="header-title-box__subtitle-dot"></span>
            <p class="header-title-box__subtitle-text">FAQ</p>
          </div>

          <h2 class="header-title-box__title">
            Frequently <span><br /></span> Asked <b>Questions</b>
          </h2>
        </div>

        <div class="faq-sec__list-wrapper">
          <FaqItem
            v-for="(item, index) in faqItems"
            :key="index"
            :item="item"
            :is-open="openFaqIndices.includes(index)"
            @toggle="toggleFaq(index)"
          />
        </div>
      </div>
    </section>

    <section class="ready-sec">
      <div class="container">
        <div class="ready-sec__wrapper">
          <div class="header-title-box">
            <div class="header-title-box__subtitle-row">
              <span class="header-title-box__subtitle-dot"></span>
              <p class="header-title-box__subtitle-text">READY TO SCALE?</p>
            </div>

            <h2 class="header-title-box__title">
              Turn LinkedIn Into a Predictable Outbound Channel
            </h2>

            <p class="header-title-box__description">
              Scale your LinkedIn outreach with professionally managed profile
              access assigned exclusively to your team. Built for sales teams,
              agencies, and lead generation operations.
            </p>
          </div>

          <div class="ready-sec__btn-row">
            <NuxtLink to="/payment" class="predistable-sec__btn">
              <span class="predistable-sec__btn-icon">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.891582 10.7995C0.723437 10.8001 0.558581 10.7524 0.416166 10.6618C0.27375 10.5713 0.159623 10.4417 0.0870427 10.2882C0.0144622 10.1346 -0.013592 9.96328 0.00613965 9.79419C0.0258713 9.62509 0.0925787 9.46514 0.198512 9.33291L8.99518 0.155304C9.06116 0.0781769 9.15108 0.0260579 9.25018 0.00750148C9.34927 -0.0110549 9.45165 0.00505383 9.54051 0.0531837C9.62937 0.101314 9.69943 0.178605 9.73919 0.27237C9.77896 0.366136 9.78606 0.470805 9.75933 0.569196L8.05331 5.98579C8.00301 6.12212 7.98611 6.26878 8.00408 6.41318C8.02205 6.55758 8.07434 6.69541 8.15647 6.81485C8.2386 6.93429 8.34811 7.03178 8.47562 7.09894C8.60313 7.1661 8.74482 7.20094 8.88855 7.20047H15.1084C15.2766 7.19989 15.4414 7.24763 15.5838 7.33815C15.7262 7.42867 15.8404 7.55826 15.913 7.71184C15.9855 7.86543 16.0136 8.03672 15.9939 8.20582C15.9741 8.37491 15.9074 8.53486 15.8015 8.66709L7.00482 17.8447C6.93884 17.9218 6.84892 17.9739 6.74982 17.9925C6.65073 18.0111 6.54835 17.9949 6.45949 17.9468C6.37063 17.8987 6.30057 17.8214 6.26081 17.7276C6.22104 17.6339 6.21394 17.5292 6.24067 17.4308L7.94669 12.0142C7.99699 11.8779 8.01389 11.7312 7.99592 11.5868C7.97795 11.4424 7.92566 11.3046 7.84353 11.1851C7.76141 11.0657 7.65189 10.9682 7.52438 10.9011C7.39687 10.8339 7.25518 10.7991 7.11145 10.7995H0.891582Z"
                    fill="#563AE3"
                  />
                </svg>
              </span>
              <span class="predistable-sec__btn-text"
                >Start Scaling Outreach</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>

  <componentFooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import pred1 from "@/assets/images/pred1.png";
import pred2 from "@/assets/images/pred2.png";
import pred3 from "@/assets/images/pred3.png";
import own1 from "@/assets/images/ovn1.png";
import own2 from "@/assets/images/ovn2.png";
import own3 from "@/assets/images/ovn3.png";
import own4 from "@/assets/images/ovn4.png";
import proc1 from "@/assets/images/proc-1.jpg";
import proc2 from "@/assets/images/proc-2.jpg";
import proc3 from "@/assets/images/proc-3.jpg";
import proc4 from "@/assets/images/proc-4.jpg";
import inc1 from "@/assets/images/inc-1.svg";
import inc2 from "@/assets/images/inc-2.svg";
import inc3 from "@/assets/images/inc-3.svg";
import inc4 from "@/assets/images/inc-4.svg";
import inc5 from "@/assets/images/inc-5.svg";
import heroIc1 from "@/assets/images/hero-ic-1.svg";
import heroIc2 from "@/assets/images/hero-ic-2.svg";
import heroIc3 from "@/assets/images/hero-ic-3.svg";
import heroIc4 from "@/assets/images/hero-ic-4.svg";
import heroIc5 from "@/assets/images/hero-ic-5.svg";

import componentHeader from "@/components/header.vue";

import componentFooter from "@/components/footer.vue";

import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

const heroCards = [
  {
    icon: heroIc1,
    title: "4+ months",
    subtitle: "Structured preparation period per profile",
  },
  {
    icon: heroIc2,
    title: "100% verified",
    subtitle: "All profiles pass verification by real users",
  },
  {
    icon: heroIc3,
    title: "730 ready",
    subtitle: "Profiles available for assignment",
  },
  {
    icon: heroIc4,
    title: "6+ months",
    subtitle: "Average profile history",
  },
  {
    icon: heroIc5,
    title: "24/7 support",
    subtitle: "Always-On Human Support",
  },
];

const isHeroCardsScrolled = ref(false);

const SCROLL_THRESHOLD = 200;

function updateHeroCardsActive() {
  if (typeof window === "undefined") return;
  isHeroCardsScrolled.value = window.scrollY > SCROLL_THRESHOLD;
}

onMounted(() => {
  updateHeroCardsActive();
  window.addEventListener("scroll", updateHeroCardsActive, { passive: true });

  store.counterValue.count = 0;
  store.counterValue.type = null;
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateHeroCardsActive);
});

const cards = [
  {
    image: pred1,
    title: "Carefully Prepared for Outbound",
    items: [
      "Each profile completes a structured 4+ month preparation phase before assignment",
      "Activity patterns are developed gradually to ensure consistency",
      "No bulk actions or aggressive automation during preparation",
    ],
  },
  {
    image: pred2,
    title: "Controlled Activity Framework",
    items: [
      "Daily and weekly activity thresholds are defined individually",
      "Limits are aligned with profile maturity and history",
      "Built-in cooldown periods reduce unusual activity spikes",
    ],
  },
  {
    image: pred3,
    title: "Individually Managed Behavior",
    items: [
      "Every profile follows its own activity rhythm",
      "Actions are naturally spaced over time",
      "No duplicated schedules or synchronized patterns across profiles",
    ],
  },
];

const fitCards = [
  {
    title: "Recruitment Agencies",
    subtitle:
      "High-volume sourcing without putting core recruiter profiles at risk",
    items: [
      "Scaling candidate outreach while preserving primary recruiter profiles;",
      "Running parallel sourcing for multiple open roles;",
      "Testing new messaging or candidate segments in a controlled environment.",
    ],
  },
  {
    title: "Founders",
    subtitle: "Validate outbound before building a full sales infrastructure",
    items: [
      "Testing new products, markets, or positioning through outbound;",
      "Generating early pipeline before hiring a sales team;",
      "Launching outreach without depending on a personal LinkedIn profile.",
    ],
  },
  {
    title: "Lead Generation Agencies",
    subtitle:
      "Supporting multiple client campaigns with stable outreach capacity",
    items: [
      "Delivering consistent results across client accounts;",
      "Expanding outreach volume without rebuilding profile history;",
      "Testing new ICPs or messaging safely alongside active campaigns.",
    ],
  },
  {
    title: "Sales Teams",
    subtitle:
      "Increase outbound capacity without overloading individual profiles",
    items: [
      "Extending proven outreach workflows to additional profiles;",
      "Entering new markets or verticals in parallel;",
      "Adding immediate outreach capacity without waiting for profile preparation.",
    ],
  },
];

const pricingPlans = ref([
  {
    id: "core",
    title: "Core Profile Access",
    subtitle: "",
    price: 26, // за профиль
    priceLabel: "$26",
    period: "/month",
    profiles: 1,
    volumeTitle: "Volume Discounts Available:",
    volumeItems: ["5+ profiles - 5% discount", "10+ profiles - 7% discount"],
    includesTitle: "Includes:",
    includesItems: [
      "200+ connection actions capacity per profile",
      "Low monthly restriction rate (historically 2–5%)",
      "Identity-verified profile source",
      "Complete profile with established activity history",
      "Minimum 4 months structured preparation period",
      "24/7 human support for profile-related questions",
      "Assistance in case of temporary restrictions",
      "Best-practice guidance for safe outbound scaling",
    ],
    buttonText: "Get Core Access",
  },
  {
    id: "premium",
    title: "Premium Profile Access",
    subtitle: "LinkedIn Premium subscription connected",
    price: 49, // за профиль
    priceLabel: "$49",
    period: "/month",
    profiles: 1,
    volumeTitle: "Volume Discounts Available:",
    volumeItems: ["5+ profiles - 5% discount", "10+ profiles - 7% discount"],
    includesTitle: "Includes everything in Core, plus:",
    includesItems: [
      "Premium LinkedIn features enabled",
      "Higher visibility and expanded outreach functionality",
      "Enhanced profile positioning for outbound campaigns",
    ],
    buttonText: "Get Premium Access",
  },
]);

const decrementProfiles = (plan) => {
  if (plan.profiles > 1) {
    plan.profiles--;
  }
};

const incrementProfiles = (plan) => {
  plan.profiles++;
};

const ownCards = [
  {
    image: own1,
    title: "Keep Your Network",
    description:
      "Retain and continue growing all professional connections built over time",
  },
  {
    image: own2,
    title: "Maintain Lead Continuity",
    description:
      "Continue conversations and nurturing without interruptions or profile changes",
  },
  {
    image: own3,
    title: "Long-Term Stability",
    description:
      "Profile performance strengthens with consistent usage and history",
  },
  {
    image: own4,
    title: "Operational Control",
    description:
      "Manage outreach activity according to your internal processes and strategy",
  },
];

const processCards = [
  {
    image: proc1,
    title: "Choose Your Setup",
    text: "Select your access tier, number of profiles, and service duration based on your outreach goals",
  },
  {
    image: proc2,
    title: "Secure Checkout",
    text: "Confirm your details and complete payment through our secure payment provider",
  },
  {
    image: proc3,
    title: "Profile Provisioning",
    text: "Your profiles are assigned, reviewed, and prepared for operational use within one business day",
  },
  {
    image: proc4,
    title: "Launch Outreach",
    text: "Access your assigned profiles and begin running outbound within defined safety parameters",
  },
];

const plansPriceDopInfoList = [
  "LinkedIn Premium subscription",
  "Enhanced profile positioning for outbound campaigns",
  "200+ connection actions capacity per profile",
  "Low monthly restriction rate (historically 2-5%)",
  "Identity-verified profile source",
  "Complete profile with established activity history",
  "Minimum 4 months structured preparation period",
  "24/7 human support",
  "Assistance in case of temporary restrictions",
];

const includedCards = [
  {
    icon: inc1,
    title: "Defined Daily & Weekly Activity Guidelines",
    subtitle:
      "Clear activity thresholds tailored to each profile to support sustainable outreach performance",
  },
  {
    icon: inc2,
    title: "Structured Ramp-Up Framework",
    subtitle:
      "Gradual scaling approach designed to build activity over time in a controlled and predictable way",
  },
  {
    icon: inc3,
    title: "Natural Usage Patterns",
    subtitle:
      "Guidelines focused on maintaining authentic interaction rhythms and avoiding repetitive behavior",
  },
  {
    icon: inc4,
    title: "Clear Do's and Don'ts",
    subtitle:
      "Practical recommendations to reduce the risk of restrictions and minimize downtime",
  },
  {
    icon: inc5,
    title: "Ongoing Operational Support",
    subtitle:
      "Continuous guidance to help you scale outbound safely while maintaining profile integrity",
  },
];

const openFaqIndices = ref([]);

function toggleFaq(index) {
  const open = openFaqIndices.value;
  if (open.includes(index)) {
    openFaqIndices.value = open.filter((i) => i !== index);
  } else {
    openFaqIndices.value = [...open, index];
  }
}

const faqItems = [
  {
    question: "What is your LinkedIn profile access service?",
    answer:
      "We provide access to identity-verified LinkedIn profiles that are prepared for outbound use. You choose your access tier, number of profiles, and service duration to fit your outreach goals.",
  },
  {
    question: "How are these profiles different from newly created profiles?",
    answer:
      "Our profiles complete a structured 4+ month preparation phase, with established activity history and gradual ramp-up. They are designed for sustainable outreach rather than cold, new accounts.",
  },
  {
    question: "Is it safe to use assigned LinkedIn profiles for outreach?",
    answer:
      "We apply controlled activity guidelines and ramp-up frameworks to prioritize profile stability. While no activity is risk-free, our standards are designed to support responsible usage.",
  },
  {
    question: "Will anyone else have access to my assigned profiles?",
    answer:
      "No. Once assigned to you, profiles are dedicated to your account only. Access is not shared with other clients or used for other purposes.",
  },
  {
    question: "Can I connect the profiles to third-party tools?",
    answer:
      "Yes. Assigned profiles can be used with compatible outreach and sales tools, within the activity limits and best practices we provide to maintain profile health.",
  },
  {
    question: "Can profiles be adjusted to match my brand positioning?",
    answer:
      "Profiles come with complete, professional setup. Customization options may be available depending on your plan; our team can outline what can be adjusted to align with your brand.",
  },
];

const payPageGo = (count, id) => {
  store.counterValue.count = +count;
  store.counterValue.type = id;
  console.log(store.counterValue);
  navigateTo("/payment");
};

const requestURL = useRequestURL();

useSeoMeta({
  title: "uncap11 - Stable LinkedIn Profiles for Predictable Outreach",
  description:
    "We provide professionally prepared and maintained LinkedIn profiles that support consistent outbound activity — without adding operational overhead to your team",
  ogTitle: "uncap11 - Stable LinkedIn Profiles for Predictable Outreach",
  ogDescription:
    "We provide professionally prepared and maintained LinkedIn profiles that support consistent outbound activity — without adding operational overhead to your team",
  ogImage: `${requestURL.origin}/images/og-default.jpg`,
});
</script>

<style scoped></style>
