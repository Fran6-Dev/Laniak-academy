<template>
  <div class="relative inline-block text-left z-[999]">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="lang-btn"
    >
      <!-- Globe icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="lang-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>

      <span class="lang-label">{{ currentLanguage }}</span>

      <!-- Chevron -->
      <svg
        class="lang-chevron"
        :class="{ 'rotate-180': isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="lang-dropdown"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="language-menu"
      >
        <button
          v-for="loc in availableLocales"
          :key="loc"
          @click="changeLocale(loc)"
          class="lang-option"
          :class="{ 'lang-option-active': loc === locale }"
          role="menuitem"
        >
          {{ loc.toUpperCase() }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const availableLocales = ['fr', 'en']

const currentLanguage = computed(() => locale.value.toUpperCase())

const changeLocale = (newLocale) => {
  locale.value = newLocale
  isOpen.value = false
}
</script>

<style scoped>
/* ── Trigger button ── */
.lang-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.lang-btn:hover {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.08);
  color: #f97316;
}

.lang-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.lang-btn:hover .lang-icon {
  transform: translateY(-1px);
}

.lang-label {
  letter-spacing: 0.05em;
}

.lang-chevron {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

/* ── Dropdown ── */
.lang-dropdown {
  position: absolute;
  right: 0;
  margin-top: 8px;
  width: 80px;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  background: #1a1a1a;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.lang-option {
  display: block;
  width: 100%;
  text-align: center;
  padding: 9px 16px;
  background: transparent;
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.15s ease;
}

.lang-option:hover {
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
}

.lang-option-active {
  color: #f97316;
  background: rgba(249, 115, 22, 0.08);
}
</style>