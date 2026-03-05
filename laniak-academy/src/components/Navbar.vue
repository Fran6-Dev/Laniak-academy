<template>
  <nav class="bg-black shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <RouterLink to="/" class="text-2xl font-bold text-black">
              <img
                src="../assets/logo.png"
                alt="Laniak Academy"
                class="h-32 mt-10"
              />
            </RouterLink>
          </div>

          <!-- Navigation Links -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink
              to="/"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange"
            >
              {{ $t("nav.home") }}
            </RouterLink>
            <RouterLink
              to="/about"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange"
            >
              {{ $t("nav.about") }}
            </RouterLink>
            <RouterLink
              to="/program"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange"
            >
              {{ $t("nav.programs") }}
            </RouterLink>
            <RouterLink
              to="/references"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange"
            >
              {{ $t("nav.references") }}
            </RouterLink>
            <RouterLink
              to="/equipement"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange"
            >
              {{ $t("nav.equipement") }}
            </RouterLink>
            <RouterLink
              to="/team"
              class="border-transparent text-gray-500 hover:border-orange-500 hover:text-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              active-class="border-orange-500 text-orange"
            >
              {{ $t("nav.team") }}
            </RouterLink>
          </div>
        </div>

        <!-- Right side: Language + Cart -->
        <div class="flex items-center gap-4">
          <LanguageSelector class="hidden sm:block" />

          <!-- Cart Button Desktop -->
          <button class="snipcart-checkout cart-btn hidden sm:flex" aria-label="Ouvrir le panier">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="cart-label">{{ $t("nav.cart") }}</span>
            <span class="cart-badge snipcart-items-count"></span>
          </button>

          <!-- Mobile menu toggle -->
          <div class="-mr-2 flex items-center sm:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-controls="mobile-menu"
              :aria-expanded="isOpen"
            >
              <span class="sr-only">Ouvrir le menu principal</span>
              <svg
                v-if="!isOpen"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-show="isOpen" class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          <RouterLink to="/" class="mobile-link" active-class="mobile-link-active" @click="isOpen = false">
            {{ $t("nav.home") }}
          </RouterLink>
          <RouterLink to="/about" class="mobile-link" active-class="mobile-link-active" @click="isOpen = false">
            {{ $t("nav.about") }}
          </RouterLink>
          <RouterLink to="/program" class="mobile-link" active-class="mobile-link-active" @click="isOpen = false">
            {{ $t("nav.programs") }}
          </RouterLink>
          <RouterLink to="/references" class="mobile-link" active-class="mobile-link-active" @click="isOpen = false">
            {{ $t("nav.references") }}
          </RouterLink>
          <RouterLink to="/equipement" class="mobile-link" active-class="mobile-link-active" @click="isOpen = false">
            {{ $t("nav.equipement") }}
          </RouterLink>
          <RouterLink to="/team" class="mobile-link" active-class="mobile-link-active" @click="isOpen = false">
            {{ $t("nav.team") }}
          </RouterLink>

          <!-- Cart Button Mobile -->
          <button class="snipcart-checkout mobile-cart-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {{ $t("nav.cart") }}
            <span class="cart-badge snipcart-items-count"></span>
          </button>

          <div class="px-6 py-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LanguageSelector from "./LanguageSelector.vue";

const isOpen = ref(false);
</script>

<style scoped>
a {
  transition: all 0.3s ease;
}

/* ── Cart button desktop ── */
.cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.cart-btn:hover {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.08);
  color: #f97316;
}

.cart-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.cart-btn:hover .cart-icon {
  transform: translateY(-1px);
}

.cart-label {
  letter-spacing: 0.02em;
}

/* ── Badge ── */
.cart-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 10px;
  background: #f97316;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1;
  transition: transform 0.2s ease;
}

.cart-btn:hover .cart-badge {
  transform: scale(1.15);
}

/* ── Mobile links ── */
.mobile-link {
  display: block;
  padding: 10px 16px 10px 12px;
  border-left: 4px solid transparent;
  color: #9ca3af;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.mobile-link:hover {
  border-left-color: #f97316;
  color: #f97316;
  background: rgba(249, 115, 22, 0.05);
}

.mobile-link-active {
  border-left-color: #f97316;
  color: #f97316;
  background: rgba(249, 115, 22, 0.08);
}

/* ── Cart button mobile ── */
.mobile-cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 16px 10px 12px;
  border-left: 4px solid transparent;
  background: transparent;
  color: #9ca3af;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-cart-btn:hover {
  border-left-color: #f97316;
  color: #f97316;
  background: rgba(249, 115, 22, 0.05);
}
</style>