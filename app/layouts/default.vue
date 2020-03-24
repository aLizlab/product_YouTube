<template>
  <div class="layout layout-default">
    <HeaderDefault />

    <main class="content">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutDefault',
  components: {
    HeaderDefault: () => import('@/components/templates/headers/HeaderDefault.vue'),
  },
})
</script>

<style lang="scss" scoped>
  .layout-default {
    position: relative;
    min-height: 100vh;
    padding-top: 64px;

    > .header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 7000;
    }

    > .content {
    }

    > .footer {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>
