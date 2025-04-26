<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <RouterLink to="/" class="text-2xl font-bold text-black">
              <img src="../assets/logo.png" alt="Laniak Academy" class="w-20 h-20">
            </RouterLink>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink
              to="/"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange-500"
            >
              {{ $t('nav.home') }}
            </RouterLink>
            <RouterLink
              to="/about"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange-500"
            >
              {{ $t('nav.about') }}
            </RouterLink>
            <RouterLink
              to="/program"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange-500"
            >
              {{ $t('nav.programs') }}
            </RouterLink>
            <RouterLink
              to="/references"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange-500"
            >
              {{ $t('nav.references') }}
            </RouterLink>
            <RouterLink
              to="/team"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange-500"
            >
              {{ $t('nav.team') }}
            </RouterLink>
            <RouterLink
              to="/contact"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange-500"
            >
              {{ $t('nav.contact') }}
            </RouterLink>
          </div>
        </div>
        
        <!-- Language Selector and Mobile menu button -->
        <div class="flex items-center">
          <LanguageSelector class="hidden sm:block mr-4" />
          <div class="-mr-2 flex items-center sm:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Ouvrir le menu principal</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="sm:hidden"
        id="mobile-menu"
      >
        <div class="pt-2 pb-3 space-y-1">
          <RouterLink
            to="/"
            class="bg-orange-50 border-orange-500 text-orange-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            active-class="bg-orange-50 border-orange-500 text-orange-700"
          >
            {{ $t('nav.home') }}
          </RouterLink>
          <RouterLink
            to="/about"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            active-class="bg-orange-50 border-orange-500 text-orange-700"
          >
            {{ $t('nav.about') }}
          </RouterLink>
          <RouterLink
            to="/program"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            active-class="bg-orange-50 border-orange-500 text-orange-700"
          >
            {{ $t('nav.programs') }}
          </RouterLink>
          <RouterLink
            to="/references"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            active-class="bg-orange-50 border-orange-500 text-orange-700"
          >
            {{ $t('nav.references') }}
          </RouterLink>
          <RouterLink
            to="/team"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            active-class="bg-orange-50 border-orange-500 text-orange-700"
          >
            {{ $t('nav.team') }}
          </RouterLink>
          <RouterLink
            to="/contact"
            class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            active-class="bg-orange-50 border-orange-500 text-orange-700"
          >
            {{ $t('nav.contact') }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageSelector from './LanguageSelector.vue'

const isOpen = ref(false)
</script>

<style scoped>
/* Animation pour les liens de navigation */
a {
  transition: all 0.3s ease;
}

/* Animation pour le bouton de connexion */
button {
  transition: all 0.3s ease;
}
</style>
