<!--
 * @description: layout_header
 * @Author: Coder
 * @Date: 2019-12-14 15:20:22
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 17:41:58
 * @FilePath: \vuex\src\layout\header\header.vue
 -->
<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="() => $store.commit('asideToggle')"
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
  methods: {}
};
</script>
<style lang="scss" scoped></style>
