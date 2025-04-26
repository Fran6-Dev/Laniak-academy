<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section avec image de fond -->
      <div class="relative bg-orange-500 rounded-xl overflow-hidden mb-16">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>
        <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {{ $t('contact.title') }}
          </h1>
          <p class="mt-4 text-xl text-white max-w-3xl mx-auto">
            {{ $t('contact.subtitle') }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
            <div class="px-6 py-8 sm:p-8">
              <h2 class="text-2xl font-bold text-black mb-8 flex items-center">
                <svg class="h-6 w-6 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ $t('contact.info.title') }}
              </h2>

              <div class="space-y-8">
                <div class="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition duration-300">
                  <div class="flex-shrink-0 bg-orange-100 p-3 rounded-full">
                    <svg
                      class="h-6 w-6 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-black">{{ $t('contact.info.phone.title') }}</h3>
                    <p class="mt-1 text-gray-700">{{ $t('contact.info.phone.value') }}</p>
                  </div>
                </div>

                <div class="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition duration-300">
                  <div class="flex-shrink-0 bg-orange-100 p-3 rounded-full">
                    <svg
                      class="h-6 w-6 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-black">{{ $t('contact.info.email.title') }}</h3>
                    <p class="mt-1 text-gray-700">
                      {{ $t('contact.info.email.value') }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('contact.info.email.response') }}</p>
                  </div>
                </div>

                <div class="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition duration-300">
                  <div class="flex-shrink-0 bg-orange-100 p-3 rounded-full">
                    <svg
                      class="h-6 w-6 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-black">{{ $t('contact.info.address.title') }}</h3>
                    <p class="mt-1 text-gray-700">
                      {{ $t('contact.info.address.value') }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('contact.info.address.metro') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
          <div class="px-6 py-8 sm:p-8">
            <h2 class="text-2xl font-bold text-black mb-8 flex items-center">
              <svg class="h-6 w-6 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ $t('contact.form.title') }}
            </h2>
            <form>
              <div class="grid grid-cols-1 gap-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >{{ $t('contact.form.name') }}</label
                  >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-300"
                    :placeholder="$t('contact.form.name')"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                    >{{ $t('contact.form.email') }}</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-300"
                    :placeholder="$t('contact.form.email')"
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-gray-700"
                    >{{ $t('contact.form.phone') }}</label
                  >
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-300"
                    :placeholder="$t('contact.form.phonePlaceholder')"
                  />
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-700"
                    >{{ $t('contact.form.subject') }}</label
                  >
                  <select
                    id="subject"
                    name="subject"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-300"
                  >
                    <option value="">{{ $t('contact.form.subjectOptions.select') }}</option>
                    <option value="registration">{{ $t('contact.form.subjectOptions.registration') }}</option>
                    <option value="information">{{ $t('contact.form.subjectOptions.information') }}</option>
                    <option value="visit">{{ $t('contact.form.subjectOptions.visit') }}</option>
                    <option value="partnership">{{ $t('contact.form.subjectOptions.partnership') }}</option>
                    <option value="other">{{ $t('contact.form.subjectOptions.other') }}</option>
                  </select>
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700"
                    >{{ $t('contact.form.message') }}</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-300"
                    :placeholder="$t('contact.form.messagePlaceholder')"
                  ></textarea>
                </div>

                <div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        class="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded transition duration-300"
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="privacy" class="font-medium text-gray-700"
                        >{{ $t('contact.form.privacy.accept') }}</label
                      >
                      <p class="text-gray-500">
                        {{ $t('contact.form.privacy.description') }}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300"
                  >
                    {{ $t('contact.form.send') }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-20">
        <h2 class="text-3xl font-extrabold text-black text-center mb-12 flex items-center justify-center">
          <svg class="h-8 w-8 text-orange-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ $t('contact.faq.title') }}
        </h2>
        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="px-6 py-8 sm:p-8">
            <div class="space-y-8">
              <div class="p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition duration-300">
                <h3 class="text-lg font-medium text-black flex items-center">
                  <svg class="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  {{ $t('contact.faq.items.registration.question') }}
                </h3>
                <p class="mt-2 text-gray-700">
                  {{ $t('contact.faq.items.registration.answer') }}
                </p>
              </div>

              <div class="p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition duration-300">
                <h3 class="text-lg font-medium text-black flex items-center">
                  <svg class="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  {{ $t('contact.faq.items.ages.question') }}
                </h3>
                <p class="mt-2 text-gray-700">
                  {{ $t('contact.faq.items.ages.answer') }}
                </p>
              </div>

              <div class="p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition duration-300">
                <h3 class="text-lg font-medium text-black flex items-center">
                  <svg class="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  {{ $t('contact.faq.items.pricing.question') }}
                </h3>
                <p class="mt-2 text-gray-700">
                  {{ $t('contact.faq.items.pricing.answer') }}
                </p>
              </div>

              <div class="p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition duration-300">
                <h3 class="text-lg font-medium text-black flex items-center">
                  <svg class="h-5 w-5 text-orange-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                  {{ $t('contact.faq.items.camps.question') }}
                </h3>
                <p class="mt-2 text-gray-700">
                  {{ $t('contact.faq.items.camps.answer') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Logique de la page Contact
</script>

<style scoped>
/* Animations pour les éléments interactifs */
input, select, textarea {
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
