import { createRouter, createWebHistory } from 'vue-router';
import AccueilPage from './components/Accueil-Page.vue';
import ContactPage from './components/Contact-Page.vue';
import ProjectList from './components/Project-List.vue';

const routes = [
  { path: '/', name: 'Home', component: AccueilPage }, // Page d'accueil
  { path: '/projects', name: 'Projects', component: ProjectList }, // Page des projets
  { path: '/contact', name: 'Contact', component: ContactPage }, // Page de contact
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




