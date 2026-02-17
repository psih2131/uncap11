<template>
  <section class="predistable-sec">
    <div class="container">
      <div class="predictable-outreach">
        <div class="header-title-box">
          <div class="header-title-box__subtitle-row">
            <span class="header-title-box__subtitle-dot"></span>
            <p class="header-title-box__subtitle-text">Predictable outreach</p>
          </div>

          <h2 class="header-title-box__title">
            Stable <b>LinkedIn Profile Environments</b> Are
            <span><br /></span> the Foundation of Consistent Outbound
          </h2>

          <p class="header-title-box__description">
            How we maintain long-term profile stability and reliable performance
          </p>
        </div>

        <div class="predictable-outreach__cards">
          <article v-for="(card, index) in cards" :key="index" class="po-card">
            <div class="po-card__top">
              <img :src="card.image" :alt="card.title" class="po-card__image" />
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
          <button class="predistable-sec__btn">
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
          </button>
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

        <button class="predistable-sec__btn">
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
          <span class="predistable-sec__btn-text">Start Scaling Outreach</span>
        </button>
      </div>
      <div class="fit-sec__cards">
        <div v-for="(fitCard, index) in fitCards" :key="index" class="fit-card">
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

  <section class="plans-sec">
    <div class="container"></div>
  </section>
</template>

<script setup>
import pred1 from "@/assets/images/pred1.png";
import pred2 from "@/assets/images/pred2.png";
import pred3 from "@/assets/images/pred3.png";

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
</script>

<style scoped></style>
