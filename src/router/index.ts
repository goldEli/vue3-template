import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("../pages/Home/index.vue");
const Publish = () => import("../pages/Publish/index.vue");

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "hone", component: Home },
  { path: "/publish/:id", name: "publish", component: Publish },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
