<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */

</style>
