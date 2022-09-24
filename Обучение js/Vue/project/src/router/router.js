import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "../App.vue",
    component: Main,
  },
];
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;