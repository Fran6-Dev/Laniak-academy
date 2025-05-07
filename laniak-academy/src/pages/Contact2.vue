<template>
  <div class="contact2-container">
    <h1>Contact 2 - Page de Test</h1>
    <div class="contact-content">
      <p>Cette page est un test pour vérifier le routage.</p>
      <div class="contact-info">
        <h2>Informations de Contact</h2>
        <p>Email: test@example.com</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact2'
}
</script>

<style scoped>
.contact2-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-content {
  margin-top: 2rem;
}

.contact-info {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

h2 {
  color: #666;
  margin-bottom: 1rem;
}

p {
  margin: 0.5rem 0;
  line-height: 1.6;
}
</style> 