<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-black">
      <div class="inset-0">
        <!-- <img
          class="media-mobile w-full h-full object-cover"
          src="../assets/Carou21.jpg"
          alt="Basketball court"
        /> -->
        <video
          class="w-full h-screen object-cover"
          src="https://pub-4a5d919c29fe42fab4d5e25610f8f922.r2.dev/SMALL_LOGO_BANNIERE_LNK_WS.mp4"
          autoplay
          loop
          muted
          playsinline
        ></video>
      </div>

      <!-- <div
        class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {{ $t("home.hero.title") }}
        </h1>
        <p class="mt-6 text-xl text-white max-w-3xl">
          {{ $t("home.hero.description") }}
        </p>
     
        <div class="mt-10">
          <RouterLink
            to="/program"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-orange hover:bg-orange transition duration-300 ease-in-out"
          >
            {{ $t("home.hero.cta") }}
          </RouterLink>
        </div>
      </div> -->
    </div>
    <div class="flex justify-center pt-10 bg-white">

      <RouterLink
      to="/program"
      class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-orange hover:bg-orange transition duration-300 ease-in-out"
      >
      {{ $t("home.hero.cta") }}
    </RouterLink>
  </div>

    <!-- Features Section -->
    <div class="py-14 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-orange font-semibold tracking-wide uppercase text-2xl"
          >
            {{ $t("home.features.title") }}
          </h2>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl"
          >
            {{ $t("home.features.subtitle") }}
          </h3>
          <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            {{ $t("home.features.description") }}
          </p>
        </div>

        <div class="mt-10">
          <div
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
          >
            <div class="relative">
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange text-white"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg leading-6 font-medium text-black">
                  {{ $t("home.features.items.0.title") }}
                </h3>
                <p class="mt-2 text-base text-gray-700">
                  {{ $t("home.features.items.0.description") }}
                </p>
              </div>
            </div>

            <div class="relative">
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange text-white"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg leading-6 font-medium text-black">
                  {{ $t("home.features.items.1.title") }}
                </h3>
                <p class="mt-2 text-base text-gray-700">
                  {{ $t("home.features.items.1.description") }}
                </p>
              </div>
            </div>

            <div class="relative">
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange text-white"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg leading-6 font-medium text-black">
                  {{ $t("home.features.items.2.title") }}
                </h3>
                <p class="mt-2 text-base text-gray-700">
                  {{ $t("home.features.items.2.description") }}
                </p>
              </div>
            </div>

            <div class="relative">
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange text-white"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg leading-6 font-medium text-black">
                  {{ $t("home.features.items.3.title") }}
                </h3>
                <p class="mt-2 text-base text-gray-700">
                  {{ $t("home.features.items.3.description") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-orange">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2
          class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          <span class="block">{{ $t("home.cta.title") }}</span>
          <span class="block text-black">{{ $t("home.cta.subtitle") }}</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <RouterLink
              to="/contact"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              {{ $t("home.cta.button") }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style>
/* Par défaut, mobile-first */
.media-desktop {
  display: none;
}

@media (min-width: 768px) {
  .media-mobile {
    display: none;
  }
  .media-desktop {
    display: block;
  }
}
</style>
