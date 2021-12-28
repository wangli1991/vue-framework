/*
 * @Author: WangLi
 * @Date: 2021-12-27 15:42:41
 * @LastEditors: WangLi
 * @LastEditTime: 2021-12-27 16:18:26
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
