import { createRouter, createWebHistory } from "@ionic/vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: true },
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

