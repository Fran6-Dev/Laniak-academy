import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

const messages = {
  fr,
  en
}

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'fr', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages
})

export default i18n 