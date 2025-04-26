<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-black sm:text-5xl">
          {{ $t('references.title') }}
        </h1>
        <p class="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          {{ $t('references.subtitle') }}
        </p>
      </div>

      <!-- References Grid -->
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Reference 1 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://cdn.nba.com/headshots/nba/latest/1040x760/1629690.png" :alt="$t('references.players.mokoka.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.mokoka.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black">{{ $t('references.players.mokoka.name') }}</h3>
          </div>
        </div>

        <!-- Reference 2 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://www.basketeurope.com/content/images/size/w1304/format/webp/wp-content/uploads/2022/06/sekou-doumbouya.png" :alt="$t('references.players.sekou.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.sekou.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black">{{ $t('references.players.sekou.name') }}</h3>
          </div>
        </div>

        <!-- Reference 3 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://www.proballers.com/media/cache/resize_600_png/https---www.proballers.com/ul/player/hifi2-1ef84144-58aa-6722-8f1e-1faffbf29d8b.png" :alt="$t('references.players.hifi.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.hifi.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black mb-2">{{ $t('references.players.hifi.name') }}</h3>
          </div>
        </div>

        <!-- Reference 4 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://www.basketstats.fr/images/faces/3658.png" :alt="$t('references.players.malick.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.malick.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black mb-2">{{ $t('references.players.malick.name') }}</h3>
          </div>
        </div>

        <!-- Reference 5 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://www.proballers.com/media/cache/resize_600_png/https---www.proballers.com/ul/player/5-assemian-moulare2-1ef80e12-580c-6424-b99c-f39182925cc8.png" :alt="$t('references.players.moulare.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.moulare.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black mb-2">{{ $t('references.players.moulare.name') }}</h3>
          </div>
        </div>

        <!-- Reference 6 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2021/09/27/node_1075670/53557079/public/2021/09/27/B9728457373Z.1_20210927145026_000%2BGB7J11HSK.2-0.jpg?itok=94gjejnI1632747032" :alt="$t('references.players.niangane.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.niangane.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black mb-2">{{ $t('references.players.niangane.name') }}</h3>
          </div>
        </div>

        <!-- Reference 7 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/4896365.png&w=350&h=254" :alt="$t('references.players.alpha.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.alpha.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black mb-2">{{ $t('references.players.alpha.name') }}</h3>
          </div>
        </div>

        <!-- Reference 8 -->
        <div class="bg-white overflow-hidden shadow-lg rounded-xl transition duration-300 ease-in-out hover:shadow-xl hover:scale-105">
          <div class="h-2 bg-orange-500"></div>
          <div class="relative">
            <img class="w-full h-64 object-cover" src="https://static.vecteezy.com/system/resources/previews/002/685/300/non_2x/abstract-basketball-player-dribbling-with-ball-on-a-white-background-illustration-vector.jpg" :alt="$t('references.players.youngAthletes.name')">
            <div class="absolute top-4 right-4 flex space-x-2">
              <span class="px-3 py-1 text-xs font-bold text-white bg-orange-500 rounded-full shadow-md">{{ $t('references.players.youngAthletes.leagues') }}</span>
            </div>
          </div>
          <div class="px-6 py-5">
            <h3 class="text-xl font-bold text-black mb-2">{{ $t('references.players.youngAthletes.name') }}</h3>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 bg-orange-500 rounded-xl shadow-xl overflow-hidden">
        <div class="px-6 py-8 sm:p-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            {{ $t('references.cta.title') }}
          </h2>
          <p class="text-lg text-white mb-6">
            {{ $t('references.cta.description') }}
          </p>
          <div class="mt-6">
            <a href="/contact" class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-orange-600 bg-white hover:bg-gray-50 transition duration-300 ease-in-out">
              {{ $t('references.cta.button') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Logique de la page Références
</script> 