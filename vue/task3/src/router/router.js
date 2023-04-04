import MainPage from "@/pages/mainPage";
import {createRouter, createWebHistory} from 'vue-router';
import secondPage from "@/pages/secondPage";
import aboutPage from "@/pages/aboutPage";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/second',
        component: secondPage
    },
    {
        path: '/about',
        component: aboutPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router