<template>
 <!-- Section À propos -->
 <section id="about" class="about-section">
      <div class="about-container">
        <!-- Image -->
        <div class="about-image">
          <img :src="require('@/assets/Moi.png')" alt="Image About Me" />
        </div>
        <!-- Texte -->
        <div class="about-text">
          <h3>Qui sui-je ?</h3>
          <h2>A propos de moi </h2>
          <p>
            Bonjour ! Je m'appelle <strong>Armel Coulibaly</strong>, un étudiant passionné par 
            le <strong>community management</strong> et le <strong>montage vidéo</strong>.
            Actuellement en formation, je développe mes compétences à travers des projets
            académiques, des travaux pratiques et des initiatives personnelles.
          </p>
          <p>
            J'aime créer des contenus visuels captivants, apprendre de nouvelles techniques et 
            explorer les outils modernes pour la gestion de communautés en ligne et la création 
            graphique. Je suis motivé par l'envie d'apprendre et de progresser constamment dans 
            mon domaine.
          </p>
          <p>
            Grâce à mes études et mes projets, j'ai pu expérimenter divers outils tels que 
            Adobe Premiere Pro, Photoshop, et des plateformes de gestion de réseaux sociaux. 
            Ces expériences m'ont permis d'acquérir une base solide pour réaliser des projets 
            innovants.
          </p>
          <p>
            Mon objectif est de transformer ma passion en une carrière enrichissante, en 
            continuant à explorer les domaines de la communication digitale et de la création 
            visuelle.
          </p>
        </div>
      </div>
    </section>
    
<!-- Compétences Section -->
<section id="love" class="skills-section">
  <div class="skills-container">
    <!-- Carte 1 -->
    <div class="skill-card">
      <div class="skill-icon">
        <img src="@/assets/ecr.png" alt="Icône Montage Vidéo" class="icon-image" />
      </div>
      <h3>MONTAGE VIDÉO</h3>
      <p>
        Passionné par le montage vidéo, je mets en avant ma créativité pour produire des contenus dynamiques et fun arborant un style unique.
      </p>
    </div>

    <!-- Carte 2 -->
    <div class="skill-card">
      <div class="skill-icon">
        <img src="@/assets/cam.png" alt="Icône Création de Contenu" class="icon-image" />
      </div>
      <h3>CRÉATION DE CONTENU</h3>
      <p>
        Associé à un ami , nous créeons du contenu vidéo varié sur YouTube depuis 2019, mêlant gaming et créativité, et je stream depuis peu sur Twitch pour y partager toujours plus de contenu.
      </p>
    </div>

    <!-- Carte 3 -->
    <div class="skill-card">
      <div class="skill-icon">
        <img src="@/assets/peint.png" alt="Icône Graphisme" class="icon-image" />

      </div>
      <h3>GRAPHISME</h3>
      <p>
        Je m'efforce d'intégrer le graphisme dans mes projets, notamment à travers la conception de miniatures lors de nos production et réalisation de vidéo pour YouTube et autres visuels créatifs.
      </p>
    </div>
  </div>
</section>

<div id="competences" class="skills-section">
  <h2 class="section-title">Mes Compétences</h2>
  <div class="competences-container">
    <!-- Ajoutez ici vos barres de progression et autres éléments -->
  </div>
</div>




<div class="competences-container">
  <!-- Section des jauges -->
  <div class="skills">
    <div class="skill">
      <img src="@/assets/aia.avif" alt="Icone Illustrator" class="skill-icon" />
      <p class="skill-name">Illustrator</p>
      <div class="progress-bar">
        <div class="progress" style="width: 70%;"></div>
      </div>
    </div>

    <div class="skill">
      <img src="@/assets/ae.png" alt="Icone After Effects" class="skill-icon" />
      <p class="skill-name">After Effects</p>
      <div class="progress-bar">
        <div class="progress" style="width: 85%;"></div>
      </div>
    </div>

    <div class="skill">
      <img src="@/assets/premiere.png" alt="Icone Premiere Pro" class="skill-icon" />
      <p class="skill-name">Premiere Pro</p>
      <div class="progress-bar">
        <div class="progress" style="width: 50%;"></div>
      </div>
    </div>

    <div class="skill">
      <img src="@/assets/cap.png" alt="Icone CapCut" class="skill-icon" />
      <p class="skill-name">CapCut</p>
      <div class="progress-bar">
        <div class="progress" style="width: 50%;"></div>
      </div>
    </div>

    <div class="skill">
      <img src="@/assets/shop.png" alt="Icone Photoshop" class="skill-icon" />
      <p class="skill-name">Photoshop</p>
      <div class="progress-bar">
        <div class="progress" style="width: 50%;"></div>
      </div>
    </div>

    <div class="skill">
      <img src="@/assets/gestion.png" alt="Icone After Effects" class="skill-icon" />
      <p class="skill-name">Gestion de Projet</p>
      <div class="progress-bar">
        <div class="progress" style="width: 80%;"></div>
      </div>
    </div>
  </div>

  <!-- Section de la photo -->
  <div class="photo-section">
    <img src="@/assets/Moi.png" alt="Votre Photo" class="photo" />
  </div>
</div>

<section id="mes-projets" class="projects-section">
  <h2 class="section-title">Mes Projets</h2>
  <div class="projects-container">
    <!-- Projet 1 -->
    <div class="project-card">
      <img src="@/assets/mock.png" alt="Journal de quartier" class="project-image" />
      <div class="overlay">
        <h3>Mockup</h3>
        <p>Création Graphique</p>
      </div>
    </div>
    <!-- Projet 2 -->
    <div class="project-card">
      <img src="@/assets/eau .jpg" alt="Projet 2" class="project-image" />
      <div class="overlay">
        <h3>Affiche journée de l'eau</h3>
        <p>Création graphique</p>
      </div>
    </div>
    <!-- Projet 3 -->
    <div class="project-card">
      <img src="@/assets/logo cig.jpg" alt="Projet 3" class="project-image" />
      <div class="overlay">
        <h3>logo d'association</h3>
        <p>Création graphique</p>
      </div>
    </div>
    <!-- Projet 4 -->
    <div class="project-card">
      <img src="@/assets/Plancheeeee.jpg" alt="Projet 4" class="project-image" />
      <div class="overlay">
        <h3>Affiche sur le rechauffement climatique</h3>
        <p>Création graphique</p>
      </div>
    </div>
    <!-- Projet 5 -->
    <div class="project-card">
      <img src="@/assets/mar.jpg" alt="Projet 5" class="project-image" />
      <div class="overlay">
        <h3>livret</h3>
        <p>Création graphique</p>
      </div>
    </div>
    <!-- Projet 6 -->
    <div class="project-card">
      <img src="@/assets/capi.png" alt="Projet 6" class="project-image" />
      <div class="overlay">
        <h3>Interface animée</h3>
        <p>Motion design</p>
      </div>
    </div>
  </div>
  <div class="more-link">
    <router-link to="/projects" class="learn-more">En savoir plus</router-link>
  </div>
</section>


</template>


<script>

export default {
  name: "AccueilPage",
  
};
</script>

<style>
/* Important : Import du fichier CSS */
@import "@/styles/Accueil-Page.css";
</style>



