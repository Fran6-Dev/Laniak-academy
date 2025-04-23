<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-black sm:text-5xl">
          {{ $t('about.title') }}
        </h1>
        <p class="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          {{ $t('about.subtitle') }}
        </p>
      </div>

      <!-- Content Section -->
      <div class="bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="px-4 py-5 sm:p-6">
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700">
              {{ $t('about.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          {{ $t('about.values.title') }}
        </h2>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(value, index) in values" :key="index" class="bg-white p-6 rounded-xl shadow-lg">
            <div class="text-orange-500 mb-4">
              <component :is="value.icon" class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t(`about.values.items.${index}.title`) }}</h3>
            <p class="text-gray-600">{{ $t(`about.values.items.${index}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  SparklesIcon 
} from '@heroicons/vue/24/outline'

const values = [
  { icon: AcademicCapIcon },
  { icon: UserGroupIcon },
  { icon: SparklesIcon }
]
</script> 