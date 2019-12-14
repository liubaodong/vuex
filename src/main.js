/*
 * @description: 入口main.js
 * @Author: Coder
 * @Date: 2019-12-11 20:21:39
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 17:46:34
 * @FilePath: \vuex\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 引入全局css */
import "./assets/css/index.scss";
/* 引入antd */
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(antd);

Vue.config.productionTip = false;

/* vue 使用插件 区域 ↓*/

/* vue 使用插件 区域 ↑*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
/* 持久化vuex */
