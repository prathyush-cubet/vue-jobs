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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;