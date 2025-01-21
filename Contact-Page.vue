

<template>
  <section class="contact-section">
    <h1 class="section-title">Contactez-moi</h1>

    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="form.name" placeholder="Votre nom" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" placeholder="Votre email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" placeholder="Votre message" rows="5" required></textarea>
      </div>

      <button type="submit" class="submit-button">Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Merci ${this.form.name}, votre message a bien été envoyé !`);
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style>
/* Important : Import du fichier CSS */
@import "@/styles/Contact.css";
</style>