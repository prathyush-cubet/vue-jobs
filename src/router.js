import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/jobs",
    name: "jobs",
    component: () => import("./components/JobList")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddJob")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("./components/Login")
  },
  {
      path: '/register',
      name: 'Register',
      component: () => import("./components/Register")
  },
  {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import("./components/Dashboard")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;