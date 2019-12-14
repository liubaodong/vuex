/*
 * @description: store主文件
 * @Author: Coder
 * @Date: 2019-12-11 20:21:40
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 15:08:21
 * @FilePath: \vuex\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
  plugins: [createPersistedState()]
});
