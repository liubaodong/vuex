<!--
 * @description: layout_header
 * @Author: Coder
 * @Date: 2019-12-14 15:20:22
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 18:17:59
 * @FilePath: \vuex\src\layout\header\header.vue
 -->
<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="getState"
      />
    </a-layout-header>
  </div>
</template>

<script>
export default {
  name: "layout_header",
  components: {},
  props: {},
  data() {
    return {
      collapsed: false
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    getState() {
      let set = sessionStorage.setItem("store", this.$store.state);
      //  let get = sessionStorage.getItem("store");
      console.log(localStorage);
    }
  }
};
</script>
<style lang="scss" scoped></style>
