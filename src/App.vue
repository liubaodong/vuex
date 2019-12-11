<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-12-11 20:21:39
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-11 21:10:13
 * @FilePath: \vuex\src\App.vue
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <div>
        <button @click="add">++</button>
        <button @click="del">--</button>
        <button @click="clear">clear</button>
      </div>
      <div>
        <span>{{ count }}</span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  mounted() {},
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    add() {
      this.num = this.$store.commit("add");
    },
    del() {
      this.$store.commit("del");
    },
    clear() {
      this.$store.commit("clear");
    }
  }
};
</script>
