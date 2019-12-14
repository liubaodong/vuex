<!--
 * @description: layout_header
 * @Author: Coder
 * @Date: 2019-12-14 15:20:22
 * @LastEditors: Coder
 * @LastEditTime: 2019-12-14 20:31:32
 * @FilePath: \vuex\src\layout\header\header.vue
 -->
<template>
  <div>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon
        class="trigger"
        :type="toggle ? 'menu-unfold' : 'menu-fold'"
        @click="$store.commit(TOGGLE)"
      />
      <slot name="left"></slot>
      <slot></slot>
      <slot name="right"></slot>
    </a-layout-header>
  </div>
</template>

<script>
import { TOGGLE } from "@/store/types.js";
import { mapGetters } from "vuex";
export default {
  name: "layout_header",
  components: {},
  props: {},
  data() {
    return {
      TOGGLE
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {
    ...mapGetters(["toggle"])
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
