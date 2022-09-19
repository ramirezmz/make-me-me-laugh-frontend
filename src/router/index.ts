import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/poker-face",
      name: "poker-face",
      component: () => import("../views/PokerFaceView.vue"),
    },
    {
      path: "/happy",
      name: "happy",
      component: () => import("../views/HappyView.vue"),
    },
    {
      path: "/sad",
      name: "sad",
      component: () => import("../views/SadView.vue"),
    },
  ],
});

export default router;
