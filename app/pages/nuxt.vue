<template>
  <div class="page page-nuxt page-nuxt-parent">
    <SidenavDefault :pages="pages" />
    <main class="content">
      <nuxt-child />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { SidenavType } from '@/define/Sidenav'

export default Vue.extend({
  components: {
    SidenavDefault: () => import('@/components/templates/sidenavs/SidenavDefault.vue'),
  },
  data (): {
    pages: SidenavType[],
    } {
    return {
      pages: [
        {
          label: 'はじめに',
          slug: '/nuxt',
        },
        {
          label: 'Vueインスタンス',
          slug: '/nuxt/instance',
          sections: [
            {
              label: 'Data & Methods',
              slug: '/nuxt/instance/data-and-methods',
            },
            {
              label: 'ライフサイクル',
              slug: '/nuxt/instance/lifecycle',
            },
          ],
        },
        {
          label: 'Template',
          slug: '/nuxt/template',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
  .page-nuxt-parent {
    display: flex;

    > .sidenav {
      position: fixed;
      top: 64px;
      left: 0;
      width: 240px;
      height: calc(100vh - 64px);
    }

    > .content {
      width: 100%;
      padding-left: 240px;
    }
  }
</style>
