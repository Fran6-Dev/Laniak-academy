<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-black">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover opacity-50"
          src="../assets/Carou4.jpg"
          alt="Laniak Equipment"
        />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {{ $t('equipement.hero.title') }}
        </h1>
        <p class="mt-6 text-xl text-white max-w-3xl">
          {{ $t('equipement.hero.description') }}
        </p>
      </div>
    </div>

<!-- Products Grid -->
<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center mb-12">
      <h2 class="text-xl text-orange font-semibold tracking-wide uppercase">
        {{ $t('equipement.features.title') }}
      </h2>
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
        {{ $t('equipement.features.subtitle') }}
      </h3>
      <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
        {{ $t('equipement.features.description') }}
      </p>
      <p class="mt-4 text-gray-500 italic">
        {{ $t('equipement.features.contactInstagram') }}
      </p>
      <div class="mt-4 flex justify-center">
        
          <a href="https://www.instagram.com/laniakbasketballacademy/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-semibold rounded-md hover:bg-black transition duration-300"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Instagram
        </a>
      </div>
    </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col"
          >
            <div class="overflow-hidden">
              <img
                :src="product.image"
                alt="Laniak Product"
                class="w-full h-96 object-cover object-center group-hover:opacity-75 transition duration-300"
              />
            </div>
            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-lg font-medium text-gray-900">{{ product.name }}</h3>
              <p class="mt-2 text-sm text-gray-500 flex-1">{{ product.description }}</p>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-xl font-bold text-orange">{{ product.price }} €</span>
                <span class="text-sm text-gray-500 italic">
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-orange">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span class="block">{{ $t('equipement.cta.title') }}</span>
          <span class="block text-black">{{ $t('equipement.cta.subtitle') }}</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            
              <a href="https://www.instagram.com/laniakbasketballacademy/"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              {{ $t('equipement.cta.button') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const products = computed(() => [
  {
    id: 1,
    name: t('equipement.products.item1.title'),
    description: t('equipement.products.item1.description'),
    price: 29.99,
    image: new URL('../assets/Equipement1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    name: t('equipement.products.item2.title'),
    description: t('equipement.products.item2.description'),
    price: 34.99,
    image: new URL('../assets/Equipement2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    name: t('equipement.products.item3.title'),
    description: t('equipement.products.item3.description'),
    price: 24.99,
    image: new URL('../assets/Equipement3.jpg', import.meta.url).href,
  },
  {
    id: 4,
    name: t('equipement.products.item4.title'),
    description: t('equipement.products.item4.description'),
    price: 39.99,
    image: new URL('../assets/Equipement4.jpg', import.meta.url).href,
  },
  {
    id: 5,
    name: t('equipement.products.item5.title'),
    description: t('equipement.products.item5.description'),
    price: 19.99,
    image: new URL('../assets/Equipement5.jpg', import.meta.url).href,
  },
  {
    id: 6,
    name: t('equipement.products.item6.title'),
    description: t('equipement.products.item6.description'),
    price: 44.99,
    image: new URL('../assets/Equipement6.jpg', import.meta.url).href,
  },
  {
    id: 7,
    name: t('equipement.products.item7.title'),
    description: t('equipement.products.item7.description'),
    price: 29.99,
    image: new URL('../assets/Equipement9.jpeg', import.meta.url).href,
  },
  {
    id: 8,
    name: t('equipement.products.item8.title'),
    description: t('equipement.products.item8.description'),
    price: 29.99,
    image: new URL('../assets/Equipement8.jpeg', import.meta.url).href,
  },
])
</script>