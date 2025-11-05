<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->

    <div class="relative bg-orange-500 rounded-xl overflow-hidden mb-16">
      <div
        class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"
      ></div>
      <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ $t("contact.title") }}
        </h1>
        <p class="mt-4 text-xl text-white max-w-3xl mx-auto">
          {{ $t("contact.subtitle") }}
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 pb-12">
      <div class="grid grid-cols-1  gap-12">
        <!-- Contact Information -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-6">
            {{ $t("contact.info.title") }}
          </h2>

          <div class="space-y-6">
            <!-- Phone -->
            <div class="flex items-center mt-1">
              <svg
                class="h-6 w-6 text-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p class="ml-3 text-gray-800">
                {{ $t("contact.info.phone.value") }}
              </p>
            </div>

            <!-- Email -->
            <div class="flex items-center mt-1">
              <svg
                class="h-6 w-6 text-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p class="ml-3 text-gray-800 break-all">
                laniakbasketballacademy@gmail.com
              </p>
            </div>

            <!-- Address -->
            <div class="flex items-center mt-1">
              <svg
                class="h-6 w-6 text-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div class="ml-3 text-gray-800">
                <p>{{ $t("contact.info.address.value") }}</p>
                <p class="text-sm text-gray-500">
                  {{ $t("contact.info.address.metro") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-6">
            {{ $t("contact.form.title") }}
          </h2>
          <form class="space-y-6">
            <!-- Name -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700"
                >{{ $t("contact.form.name") }}</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
                >{{ $t("contact.form.email") }}</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <!-- Phone -->
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700"
                >{{ $t("contact.form.phone") }}</label
              >
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+33 6 12 34 56 78"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <!-- Subject -->
            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700"
                >{{ $t("contact.form.subject") }}</label
              >
              <select
                id="subject"
                name="subject"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              >
                <option value="">
                  {{ $t("contact.form.subjectPlaceholder") }}
                </option>
                <option value="registration">
                  {{ $t("contact.form.subjectOptions.registration") }}
                </option>
                <option value="information">
                  {{ $t("contact.form.subjectOptions.information") }}
                </option>
                <option value="visit">
                  {{ $t("contact.form.subjectOptions.visit") }}
                </option>
                <option value="partnership">
                  {{ $t("contact.form.subjectOptions.partnership") }}
                </option>
                <option value="other">
                  {{ $t("contact.form.subjectOptions.other") }}
                </option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
                >{{ $t("contact.form.message") }}</label
              >
              <textarea
                id="message"
                name="message"
                rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                :placeholder="$t('contact.form.messagePlaceholder')"
              ></textarea>
            </div>

            <!-- Privacy Policy -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-orange focus:ring-orange-500"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="privacy" class="font-medium text-gray-700">{{
                  $t("contact.form.privacy.accept")
                }}</label>
                <p class="text-gray-500">
                  {{ $t("contact.form.privacy.description") }}
                </p>
              </div>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                {{ $t("contact.form.send") }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-12">
          {{ $t("contact.faq.title") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- FAQ Item 1 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">
              {{ $t("contact.faq.items.registration.question") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("contact.faq.items.registration.answer") }}
            </p>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">
              {{ $t("contact.faq.items.ages.question") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("contact.faq.items.ages.answer") }}
            </p>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">
              {{ $t("contact.faq.items.pricing.question") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("contact.faq.items.pricing.answer") }}
            </p>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">
              {{ $t("contact.faq.items.camps.question") }}
            </h3>
            <p class="text-gray-600">
              {{ $t("contact.faq.items.camps.answer") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "Contact",
});
</script>

<style scoped>
/* Les styles sont gérés par Tailwind CSS */
</style>
