<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-black sm:text-5xl">
          {{ $t('programs.title') }}
        </h1>
        <p class="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          {{ $t('programs.subtitle') }}
        </p>
      </div>
      <!-- Programs Grid -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Program 1 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="px-6 py-5 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="p-2 bg-orange-100 rounded-full">
                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-4">{{ $t('programs.stages.title') }}</h3>
            <ul class="space-y-3 text-left">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.stages.description') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.stages.age') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.stages.schedule') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.stages.youth') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Program 2 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="px-6 py-5 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="p-2 bg-orange-100 rounded-full">
                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-4">{{ $t('programs.perfectionnement.title') }}</h3>
            <ul class="space-y-3 text-left">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.perfectionnement.description') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.perfectionnement.target') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Program 3 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="px-6 py-5 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="p-2 bg-orange-100 rounded-full">
                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-4">{{ $t('programs.openGym.title') }}</h3>
            <ul class="space-y-3 text-left">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.openGym.description') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.openGym.sessions') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Program 4 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="px-6 py-5 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="p-2 bg-orange-100 rounded-full">
                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-4">{{ $t('programs.threeOnThree.title') }}</h3>
            <ul class="space-y-3 text-left">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.threeOnThree.description') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.threeOnThree.tournament') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Program 5 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="px-6 py-5 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="p-2 bg-orange-100 rounded-full">
                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-4">{{ $t('programs.strength.title') }}</h3>
            <ul class="space-y-3 text-left">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.strength.description') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.strength.benefits') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Program 6 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="px-6 py-5 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="p-2 bg-orange-100 rounded-full">
                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-4">{{ $t('programs.recovery.title') }}</h3>
            <ul class="space-y-3 text-left">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.recovery.description') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Program 7 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="px-6 py-5 text-center">
            <div class="flex items-center justify-center mb-4">
              <div class="p-2 bg-orange-100 rounded-full">
                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-black mb-4">{{ $t('programs.individual.title') }}</h3>
            <ul class="space-y-3 text-left">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.individual.description') }}</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-orange-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-700">{{ $t('programs.individual.benefits') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <h2 class="text-3xl font-bold text-black">{{ $t('programs.cta.title') }}</h2>
        <p class="mt-4 text-xl text-gray-700">{{ $t('programs.cta.description') }}</p>
        <div class="mt-8">
          <RouterLink
            to="/contact"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
          >
            {{ $t('programs.cta.button') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
