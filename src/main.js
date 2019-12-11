/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-12-11 20:21:39
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-11 20:50:52
 * @FilePath: \vuex\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
