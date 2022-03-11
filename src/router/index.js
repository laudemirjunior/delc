import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import HitsView from "../views/HitsView.vue";
import DashboardView from "../views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/hits",
    name: "hits",
    component: HitsView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: {
      login: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(false),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (!localStorage.getItem("@delc:token")) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
