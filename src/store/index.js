/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-12-11 20:21:40
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-11 21:09:12
 * @FilePath: \vuex\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++;
    },
    del(state) {
      state.count--;
    },
    clear(state) {
      state.count = 0;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
