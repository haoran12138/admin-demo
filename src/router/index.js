import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/Layout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    redirect: "/page"
  },
  {
    path: "/page",
    component: Layout,
    redirect: "/page/pageA",
    children: [
      {
        path: "pageA",
        name: "PageA",
        component: () => import("@/views/pageA/index")
      },
      {
        path: "pageB",
        name: "PageB",
        component: () => import("@/views/pageB/index")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
