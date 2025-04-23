<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-black sm:text-5xl">
          Notre Équipe
        </h1>
        <p class="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          Découvrez les experts passionnés qui font de Laniak Academy une plateforme d'exception
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
                  <svg class="h-16 w-16 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-black">Niakate Modibo</h3>
                <p class="text-orange-500">Président Fondateur</p>
              </div>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <svg class="h-16 w-16 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-black">Louvenor Jean-Pierre</h3>
                <p class="text-orange-500">Vice Président</p>
              </div>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <svg class="h-16 w-16 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-black">Raho Adbel-Galile</h3>
                <p class="text-orange-500">Secrétaire</p>
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
                  <svg class="h-16 w-16 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-black">Dieujust Anderson </h3>
                <p class="text-orange-500">Conseiller Technique</p>
              </div>
            </div>
          </div>

          <!-- Team Member 5 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex flex-col items-center">
                <div class="h-32 w-32 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <svg class="h-16 w-16 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-black">Niakate Rokiatou</h3>
                <p class="text-orange-500">Tresorière</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Join Us Section -->
      <div class="bg-orange-500 rounded-lg shadow-xl overflow-hidden">
        <div class="px-4 py-5 sm:p-6 text-center">
          <h2 class="text-2xl font-bold text-white">Rejoignez notre équipe</h2>
          <p class="mt-2 text-lg text-white">
            Nous recherchons constamment des talents passionnés pour enrichir notre équipe.
          </p>
          <div class="mt-5">
            <RouterLink to="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition duration-300 ease-in-out">
              Contactez-nous
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