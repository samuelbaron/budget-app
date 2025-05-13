import { createRouter, createWebHistory } from "@ionic/vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
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
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// TODO Guards
// router.beforeEach((to, from, next) => {
//   next();
// });

export default router;

// TODO next routes
//   // {
//   //   path: "/dashboard",
//   //   name: "dashboard",
//   //   component: () => import("../views/DashboardView.vue"),
//   //   meta: { requiresAuth: true },
//   // },
//   // {
//   //   path: "/budget",
//   //   name: "budget",
//   //   component: () => import("../views/BudgetView.vue"),
//   //   meta: { requiresAuth: true },
//   // },
//   // {
//   //   path: "/profile",
//   //   name: "profile",
//   //   component: () => import("../views/ProfileView.vue"),
//   //   meta: { requiresAuth: true },
//   // },

