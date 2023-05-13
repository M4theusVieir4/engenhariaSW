import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
// import Home from '@/views/Home.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDjCF7baoRDztDMhJC8d0x_j96hUL3uaU8",
  authDomain: "engenhariasw-99bde.firebaseapp.com",
  projectId: "engenhariasw-99bde",
  storageBucket: "engenhariasw-99bde.appspot.com",
  messagingSenderId: "189158024420",
  appId: "1:189158024420:web:9ad00f52c3ffa707b4b8f1",
  measurementId: "G-FQ571XVX75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/colaboradores', name: 'Colaboradores', component: () => import('./views/Colaboradores.vue') },

  ],
});



createApp(App).use(router).mount('#app');
export { db };