import { createRouter, createWebHistory } from 'vue-router';

import About from '@/pages/AboutPage.vue';
import MainPage from "@/pages/MainPage.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;