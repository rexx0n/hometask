import { createRouter, createWebHistory } from 'vue-router';

import About from '@/pages/AboutPage.vue';
import MainPage from "@/pages/MainPage.vue";
import Product from "@/pages/Product.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/about', component: About },
    {path: '/product/:product_name', component: Product}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;