import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About"
import PostIdPage from "@/pages/PostIdPage"
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/post",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/post/:id",
    component: PostIdPage,
  },
];
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;