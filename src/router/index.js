import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Solution from "@/views/Solution";
import SolutionList from "@/views/solution/List";
import Detail from "@/views/solution/Detail";
import Case from "@/views/Case";
import Service from "@/views/Service";
import Recruitment from "@/views/Recruitment";
import About from "../views/About.vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: Home,
  },
  {
    path: "/solution",
    name: "Solution",
    meta: {
      title: "解决方案",
    },
    component: Solution,
    children: [
      {
        path: "dataCenter",
        name: "DataCenter",
        meta: {
          title: "数据中心",
          type: "DataCenter",
        },
        component: SolutionList,
      },
      {
        path: "network",
        name: "Network",
        meta: {
          title: "企业网络",
          type: "Network",
        },
        component: SolutionList,
      },
      {
        path: "cloud",
        name: "Cloud",
        meta: {
          title: "云计算",
          type: "Cloud",
        },
        component: SolutionList,
      },
      {
        path: "detail",
        name: "Detail",
        meta: {
          title: "详情",
          type: "Detail",
        },
        component: Detail,
      },
    ],
  },
  {
    path: "/case",
    name: "Case",
    meta: {
      title: "成功案例",
    },
    component: Case,
  },
  {
    path: "/service",
    name: "Service",
    meta: {
      title: "服务支持",
    },
    component: Service,
  },
  {
    path: "/recruitment",
    name: "Recruitment",
    meta: {
      title: "人才招聘",
    },
    component: Recruitment,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于我们",
    },
    component: About,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
