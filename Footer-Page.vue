<template>
<footer style="background: linear-gradient(to bottom, #ffffff, #4A4E69); color: #F2E9E4; padding: 60px 20px; font-family: 'Poppins', sans-serif; margin-top: 50px;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
      <!-- Section Logo -->
      <div style="flex: 1; text-align: left; min-width: 200px;">
        <h2 style="margin: 0; font-size: 24px; font-weight: bold;">Mon Portfolio</h2>
    
      </div>
  
      <!-- Section Navigation -->
      <div style="flex: 1; text-align: center; min-width: 200px;">
        <nav>
          <a href="#accueil" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 14px;">Accueil</a>
          <a href="#apropos" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 14px;">À propos</a>
          <a href="#competences" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 14px;">Compétences</a>
          <a href="#projets" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 14px;">Projets</a>
          <a href="#contact" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 14px;">Contact</a>
        </nav>
      </div>
  
      <!-- Section Réseaux Sociaux -->
      <div style="flex: 1; text-align: right; min-width: 200px;">
        <div>
          <a href="#" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 20px;">LinkedIn</a>
          <a href="#" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 20px;">GitHub</a>
          <a href="#" style="margin: 0 10px; color: #F2E9E4; text-decoration: none; font-size: 20px;">YouTube</a>
        </div>
      </div>
    </div>
  
    <!-- Ligne de séparation -->
    <div style="margin: 30px auto; border-top: 1px solid #C9ADA7; width: 90%;"></div>
  
    <!-- Texte de Copyright -->
    <div style="text-align: center; font-size: 12px; color: #C9ADA7;">
      © 2025 Mon Portfolio - Tous droits réservés
    </div>
  </footer>
</template>


<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
  /*css footer

  /* Style général du footer */
  .footer {
  background: linear-gradient(to bottom, #ffffff, #4A4E69);
  color: #F2E9E4;
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
  margin-top: 50px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  flex: 1;
  text-align: left;
  min-width: 200px;
}

.footer-logo h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.footer-logo p {
  margin: 10px 0 0;
  font-size: 14px;
  color: #ed3e17;
}

.footer-nav {
  flex: 1;
  text-align: center;
  min-width: 200px;
}

.footer-nav {
  flex: 1;
  text-align: center;
  min-width: 200px;
  display: flex;
  justify-content: center; /* Centre les liens horizontalement */
  align-items: center; /* Centre les liens verticalement */
}

.footer-nav a {
  display: inline-block;
  margin: 0 20px; /* Ajoute un espacement horizontal entre les liens */
  padding: 0;
  color: #F2E9E4;
  text-decoration: none;
  font-size: 14px;
  vertical-align: middle;
}


.footer-social {
  flex: 1;
  text-align: right;
  min-width: 200px;
}

.footer-social a {
  margin: 0 10px;
  color: #F2E9E4;
  text-decoration: none;
  font-size: 20px;
}

.footer-separator {
  margin: 30px auto;
  border-top: 1px solid #C9ADA7;
  width: 90%;
}

.footer-copyright {
  text-align: center;
  font-size: 12px;
  color: #C9ADA7;
}

</style>