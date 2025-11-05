<template>
  <div class="relative inline-block text-left z-[999]">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="inline-flex items-center px-3 py-2 border border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
    >
      {{ currentLanguage }}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="language-menu"
    >
      <div class="py-1" role="none">
        <button
          v-for="locale in availableLocales"
          :key="locale"
          @click="changeLocale(locale)"
          class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          {{ locale.toUpperCase() }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const availableLocales = ['fr', 'en']

const currentLanguage = computed(() => {
  return locale.value.toUpperCase()
})

const changeLocale = (newLocale) => {
  locale.value = newLocale
  isOpen.value = false
}
</script> 