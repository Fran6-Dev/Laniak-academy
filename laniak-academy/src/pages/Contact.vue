<template>
  <div class="container">
    <!-- Header Section -->
    <div class="header">
      <h1>{{ $t('contact.title') }}</h1>
      <p>{{ $t('contact.subtitle') }}</p>
    </div>

    <div class="content">
      <!-- Contact Information -->
      <div class="info-section">
        <h2>{{ $t('contact.info.title') }}</h2>
        
        <div class="info-item">
          <h3>{{ $t('contact.info.phone.title') }}</h3>
          <p>{{ $t('contact.info.phone.value') }}</p>
        </div>

        <div class="info-item">
          <h3>{{ $t('contact.info.email.title') }}</h3>
          <p>{{ $t('contact.info.email.value') }}</p>
        </div>

        <div class="info-item">
          <h3>{{ $t('contact.info.address.title') }}</h3>
          <p>{{ $t('contact.info.address.value') }}</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="form-section">
        <h2>{{ $t('contact.form.title') }}</h2>
        <form>
          <div class="form-group">
            <label for="name">{{ $t('contact.form.name') }}</label>
            <input type="text" id="name" name="name" />
          </div>

          <div class="form-group">
            <label for="email">{{ $t('contact.form.email') }}</label>
            <input type="email" id="email" name="email" />
          </div>

          <div class="form-group">
            <label for="message">{{ $t('contact.form.message') }}</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>

          <button type="submit">{{ $t('contact.form.send') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .content {
    grid-template-columns: 1fr 1fr;
  }
}

.info-section, .form-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item h3 {
  margin-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #f97316;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #ea580c;
}
</style> 