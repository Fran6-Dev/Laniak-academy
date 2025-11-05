<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section avec image de fond -->
      <div class="relative bg-orange rounded-xl overflow-hidden mb-16">
        <div class="absolute inset-0 bg-gradient-to-r bg-orange opacity-90"></div>
        <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {{ $t('about.title') }}
          </h1>
          <p class="mt-4 text-xl text-white max-w-3xl mx-auto">
            {{ $t('about.subtitle') }}
          </p>
        </div>
      </div>

      <!-- Story Section avec image -->
      <div class="bg-white shadow-xl rounded-lg overflow-hidden mb-12 transform transition duration-300 hover:shadow-2xl">
        <div class="md:flex">
          <div class="md:w-1/3">
            <div class="h-full bg-gray-200 flex items-center justify-center">
              <img 
                src="../assets/modibo.png" 
                alt="Modibo Niakate" 
                class="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
          <div class="md:w-2/3">
            <div class="px-6 py-8 sm:p-8">
              <h2 class="text-2xl font-bold text-black flex items-center">
                <svg class="h-6 w-6 text-orange mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                MODIBO NIAKATE
              </h2>
              <div class="mt-4 prose max-w-none text-gray-700">
                <p>{{ $t('about.story.paragraph1') }}</p>
                <p class="mt-4">{{ $t('about.story.paragraph2') }}</p>
                <p class="mt-4">{{ $t('about.story.paragraph3') }}</p>
                <p class="mt-4">{{ $t('about.story.paragraph4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission & Values Section -->
      <!-- Mission -->
      <div class="bg-white shadow-xl rounded-lg overflow-hidden mb-12 transform transition duration-300 hover:shadow-2xl">
        <div class="md:flex flex-row-reverse">
          <div class="md:w-1/3">
            <div class="h-full bg-gray-200 flex items-center justify-center">
              <img 
                src="../assets/Coaching1.png" 
                alt="Coaching basketball" 
                class="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
          <div class="md:w-2/3">
            <div class="px-6 py-8 sm:p-8">
              <h2 class="text-2xl font-bold text-black flex items-center">
                <svg class="h-6 w-6 text-orange mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {{ $t('about.mission.title') }}
              </h2>
              <div class="mt-4 prose max-w-none text-gray-700">
                <p>{{ $t('about.mission.paragraph1') }}</p>
                <p class="mt-4">{{ $t('about.mission.paragraph2') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="bg-white shadow-xl rounded-lg overflow-hidden mb-12 transform transition duration-300 hover:shadow-2xl">
        <div class="md:flex">
          <div class="md:w-1/3">
            <div class="h-full bg-gray-200 flex items-center justify-center">
              <img 
                src="../assets/valeurs.jpeg" 
                alt="Valeurs basketball" 
                class="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
          <div class="md:w-2/3">
            <div class="px-6 py-8 sm:p-8">
              <h2 class="text-2xl font-bold text-black flex items-center">
                <svg class="h-6 w-6 text-orange mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {{ $t('about.values.title') }}
              </h2>
              <div class="mt-4 prose max-w-none text-gray-700">
                <p>{{ $t('about.values.paragraph1') }}</p>
                <p class="mt-4">{{ $t('about.values.paragraph2') }}</p>
                <p class="mt-4">{{ $t('about.values.paragraph3') }}</p>
                <p class="mt-4">{{ $t('about.values.paragraph4') }}</p>
                <p class="mt-4">{{ $t('about.values.paragraph5') }}</p>
                <p class="mt-4">{{ $t('about.values.paragraph6') }}</p>
                <p class="mt-4">{{ $t('about.values.paragraph7') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Gallery Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-black text-center mb-8 flex items-center justify-center">
          <svg class="h-6 w-6 text-orange mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ $t('about.gallery.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <img 
              src="../assets/Carou4.jpg" 
              alt="Basketball training" 
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <img 
              src="../assets/Carou6.jpg" 
              alt="Basketball team" 
              class="w-full h-64 object-cover"
            />
          </div>
          <div class="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
            <img 
              src="../assets/Carou21.jpg" 
              alt="Basketball court" 
              class="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-orange rounded-lg shadow-xl overflow-hidden">
        <div class="px-4 py-5 sm:p-6 text-center">
          <h2 class="text-2xl font-bold text-white">
            {{ $t('about.cta.title') }}
          </h2>
          <p class="mt-2 text-lg text-white">
            {{ $t('about.cta.description') }}
          </p>
          <div class="mt-5">
            <RouterLink
              to="/contact"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange bg-white hover:bg-gray-50 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <svg class="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {{ $t('about.cta.button') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Animations pour les éléments interactifs */
img {
  transition: all 0.3s ease;
}

img:hover {
  filter: brightness(1.1);
}
</style>
