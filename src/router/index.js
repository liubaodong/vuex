/*
 * @description: ROUTER路由主入口
 * @Author: Coder
 * @Date: 2019-12-11 20:21:40
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 17:36:44
 * @FilePath: \vuex\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
const index = () => import("@/layout/index.vue");
const viewIndex = () => import("@/views/index.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/index"
  },
  {
    path: "/index",
    component: index,
    name: "",
    meta: {},
    children: [
      {
        path: "",
        redirect: "viewIndex"
      },
      {
        path: "viewIndex",
        component: viewIndex
      }
    ]
  },

  /* 输入错误地址默认重定向index */
  {
    path: "**",
    redirect: "/index"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
