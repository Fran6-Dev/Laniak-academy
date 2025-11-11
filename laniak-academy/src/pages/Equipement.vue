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
          <h2 class="text-xl text-orange font-semibold tracking-wide uppercase">{{ $t('equipement.features.title') }}</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            {{ $t('equipement.features.subtitle') }}
          </h3>
          <p class="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            {{ $t('equipement.features.description') }}
          </p>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Product 1 -->
          <div class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src="../assets/Equipement1.jpg"
                alt="Laniak Product"
                class="w-full h-64 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ $t('equipement.products.item1.title') }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ $t('equipement.products.item1.description') }}</p>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src="../assets/Equipement2.jpg"
                alt="Laniak Product"
                class="w-full h-64 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ $t('equipement.products.item2.title') }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ $t('equipement.products.item2.description') }}</p>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src="../assets/Equipement3.jpg"
                alt="Laniak Product"
                class="w-full h-64 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ $t('equipement.products.item3.title') }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ $t('equipement.products.item3.description') }}</p>
            </div>
          </div>

          <!-- Product 4 -->
          <div class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src="../assets/Equipement4.jpg"
                alt="Laniak Product"
                class="w-full h-64 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ $t('equipement.products.item4.title') }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ $t('equipement.products.item4.description') }}</p>
            </div>
          </div>

          <!-- Product 5 -->
          <div class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src="../assets/Equipement5.jpg"
                alt="Laniak Product"
                class="w-full h-64 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ $t('equipement.products.item5.title') }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ $t('equipement.products.item5.description') }}</p>
            </div>
          </div>

         

          <!-- Product 6 -->
          <div class="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src="../assets/Equipement8.jpg"
                alt="Laniak Product"
                class="w-full h-64 object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900">{{ $t('equipement.products.item6.title') }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ $t('equipement.products.item6.description') }}</p>
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
            <RouterLink
              to="/contact"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange bg-white hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              {{ $t('equipement.cta.button') }}
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
.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
}

.aspect-w-1 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style> 