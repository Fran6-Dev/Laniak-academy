<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-black sm:text-5xl">
          {{ $t('team.title') }}
        </h1>
        <p class="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          {{ $t('team.subtitle') }}
        </p>
      </div>

      <!-- Leadership Team -->
      <div class="mb-16">
        <!-- First row with 3 members -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-12">
          <!-- Team Member 1 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <img src="../assets/mniakate.jpg" :alt="$t('team.members.modibo.name')" class="w-full h-full object-cover rounded-full">
                </div>
                <h3 class="text-lg font-medium text-black">{{ $t('team.members.modibo.name') }}</h3>
                <p class="text-orange-500">{{ $t('team.members.modibo.role') }}</p>
              </div>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <img src="../assets/louvenor.jpg" :alt="$t('team.members.jeanPierre.name')" class="w-full h-full object-cover rounded-full">
                </div>
                <h3 class="text-lg font-medium text-black">{{ $t('team.members.jeanPierre.name') }}</h3>
                <p class="text-orange-500">{{ $t('team.members.jeanPierre.role') }}</p>
              </div>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <img src="../assets/abdel.jpg" :alt="$t('team.members.abdel.name')" class="w-full h-full object-cover rounded-full">
                </div>
                <h3 class="text-lg font-medium text-black">{{ $t('team.members.abdel.name') }}</h3>
                <p class="text-orange-500">{{ $t('team.members.abdel.role') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second row with 2 centered members -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
          <!-- Team Member 4 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <img src="../assets/anderson.jpg" :alt="$t('team.members.anderson.name')" class="w-full h-full object-cover rounded-full">
                </div>
                <h3 class="text-lg font-medium text-black">{{ $t('team.members.anderson.name') }}</h3>
                <p class="text-orange-500">{{ $t('team.members.anderson.role') }}</p>
              </div>
            </div>
          </div>

          <!-- Team Member 5 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <img src="../assets/rniakate.jpg" :alt="$t('team.members.rokiatou.name')" class="w-full h-full object-cover rounded-full">
                </div>
                <h3 class="text-lg font-medium text-black">{{ $t('team.members.rokiatou.name') }}</h3>
                <p class="text-orange-500">{{ $t('team.members.rokiatou.role') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Join Us Section -->
      <div class="bg-orange-500 rounded-lg shadow-xl overflow-hidden">
        <div class="px-4 py-5 sm:p-6 text-center">
          <h2 class="text-2xl font-bold text-white">{{ $t('team.joinUs.title') }}</h2>
          <p class="mt-2 text-lg text-white">
            {{ $t('team.joinUs.description') }}
          </p>
          <div class="mt-5">
            <RouterLink to="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition duration-300 ease-in-out">
              {{ $t('team.joinUs.cta') }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Logique de la page Équipe
</script> 