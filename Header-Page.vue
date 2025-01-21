<template>
  <header class="hero-header">
    <nav class="navbar">
      <div class="navbar-container">
        <h1 class="logo">Mon Portfolio</h1>
        <ul class="nav-links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#competences">Mes Compétences</a></li>
          <li><router-link to="/projects">Projets</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>
    
    <!-- Header -->
    <header class="hero-header">
      <div class="hero-content">
        <h1>Hey!</h1>
        <h2>Je suis Armel</h2>
        <p>Community Manager/Monteur Vidéo </p> 
      </div>
    </header>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  mounted() {
    // Ajoute l'écouteur d'événement scroll
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Supprime l'écouteur d'événement scroll pour éviter les fuites mémoire
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector(".navbar");
      const logo = document.querySelector(".logo");
      if (window.scrollY > 50) {
        // Ajoute les classes lorsque l'utilisateur scrolle
        navbar.classList.add("scrolled");
        logo.classList.add("scrolled");
      } else {
        // Supprime les classes lorsque l'utilisateur revient en haut
        navbar.classList.remove("scrolled");
        logo.classList.remove("scrolled");
      }
    },
  },
};
</script>

  
  <style scoped>

  /* Navbar */
.navbar {
  position: absolute; /* Positionne la navbar sur l'image de fond */
  top: 0;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  font-family: 'Baloo Paaji', cursive;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 10px; /* Décale légèrement la navbar vers la gauche */
}


.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: transparent; /* Transparent au départ */
  transition: background-color 0.3s, color 0.3s;
  z-index: 1000;
  padding: 10px 20px;
}

.navbar.scrolled {
  background-color: white; /* Blanc après le scroll */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-links li a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #6a5acd; /* Violet au survol */
}


.nav-links li a {
  color: white; /* Couleur des liens au départ */
}

.navbar.scrolled .nav-links li a {
  color: black; /* Couleur des liens après le scroll */
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white; /* La navbar est directement intégrée sur l'image */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px; /* Ajustez cet espace si nécessaire */
  margin-right: 20px; /* Décale légèrement les liens vers la gauche */
}

.nav-links li {
  font-size: 1.2rem;
}

.nav-links a,
.nav-links .router-link-active {
  color: white; /* Texte blanc pour s'accorder avec l'image */
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links .router-link-active:hover {
  color: #6a5acd; /* Couleur de survol */
}

/* Hero Header */
.hero-header {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white), 
              url('/src/assets/header.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh; /* Full screen */
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(10, 10, 10);
  text-align: center;
  position: relative;
}

.hero-content h1 {
  font-size: 5rem;
  margin: 0;
  text-transform: uppercase;
  font-family: 'Baloo Paaji', cursive;
}

.hero-content h2 {
  font-size: 2.5rem;
  margin: 10px 0;
  font-family: 'Baloo Paaji', cursive;
}

.hero-content p {
  font-size: 1.5rem;
  margin: 20px 0;
}

.cta-button {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #483d8b;
  }
  </style>
  