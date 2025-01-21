<template>
  <div id="app">
    <!-- Header global -->
    <Header />

    <!-- Contenu de la page -->
    <main>
      <router-view />
    </main>

    <!-- Footer global -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header-Page.vue"; // Assurez-vous que le chemin est correct
import Footer from "./components/Footer-Page.vue"; // Assurez-vous que le chemin est correct

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Appliquez ici des styles globaux si nécessaire */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
#app {
  text-align: center;
}

main {
  min-height: 80vh; /* Ajuste la hauteur pour laisser de la place au footer */
  padding: 20px;
}
</style>

