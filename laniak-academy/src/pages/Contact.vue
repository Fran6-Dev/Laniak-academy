<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-orange-600 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">{{ $t('contact.title') }}</h1>
        <p class="text-xl">{{ $t('contact.subtitle') }}</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-6">{{ $t('contact.info.title') }}</h2>
          
          <div class="space-y-6">
            <!-- Phone -->
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium">{{ $t('contact.info.phone.title') }}</h3>
                <p class="mt-1">{{ $t('contact.info.phone.value') }}</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium">Email</h3>
                <p class="mt-1">laniakbasketballacademy@gmail.com</p>
                <p class="text-sm text-gray-500 mt-1">Réponse sous 24-48h</p>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium">{{ $t('contact.info.address.title') }}</h3>
                <p class="mt-1">{{ $t('contact.info.address.value') }}</p>
                <p class="text-sm text-gray-500 mt-1">{{ $t('contact.info.address.metro') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold mb-6">Envoyez-nous votre message</h2>
          <form class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Votre nom</label>
              <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Votre email</label>
              <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Votre téléphone</label>
              <input type="tel" id="phone" name="phone" placeholder="+33 6 12 34 56 78" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Sujet de votre message</label>
              <select id="subject" name="subject" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
                <option value="">Choisissez un sujet</option>
                <option value="registration">Inscription</option>
                <option value="information">Demande d'information</option>
                <option value="visit">Visite des installations</option>
                <option value="partnership">Partenariat</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Votre message</label>
              <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" placeholder="Écrivez votre message ici..."></textarea>
            </div>

            <!-- Privacy Policy -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="privacy" name="privacy" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500">
              </div>
              <div class="ml-3 text-sm">
                <label for="privacy" class="font-medium text-gray-700">J'accepte la politique de confidentialité</label>
                <p class="text-gray-500">Vos données personnelles seront traitées conformément à notre politique de confidentialité.</p>
              </div>
            </div>

            <!-- Submit Button -->
            <div>
              <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- FAQ Item 1 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">Comment s'inscrire à Laniak Academy ?</h3>
            <p class="text-gray-600">Pour vous inscrire, vous pouvez utiliser notre formulaire de contact, nous appeler ou nous rendre visite. Nous organiserons une séance d'essai pour évaluer votre niveau et vous proposer le programme le plus adapté.</p>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">Quels sont les âges acceptés ?</h3>
            <p class="text-gray-600">Nous accueillons les joueurs de 6 à 18 ans, ainsi que les adultes amateurs et professionnels. Chaque programme est adapté à l'âge et au niveau des participants.</p>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">Comment sont calculés les tarifs ?</h3>
            <p class="text-gray-600">Nos tarifs sont personnalisés en fonction du programme choisi, de la fréquence des entraînements et des besoins spécifiques. Contactez-nous pour obtenir un devis détaillé.</p>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold mb-3">Quand ont lieu les stages ?</h3>
            <p class="text-gray-600">Nous organisons des stages pendant toutes les vacances scolaires. Ces stages sont l'occasion idéale de découvrir notre académie et de progresser rapidement dans un environnement stimulant.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Contact'
})
</script>

<style scoped>
/* Les styles sont gérés par Tailwind CSS */
</style>