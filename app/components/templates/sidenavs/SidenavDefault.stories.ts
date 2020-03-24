import Vue from 'vue'
import VueRouter from 'vue-router'

import SidenavDefault from './SidenavDefault.vue'

// @ts-ignore
// import mdx from './SidenavDefault.mdx'

Vue.use(VueRouter)

export default {
  title: 'templates/sidenavs/SidenavDefault',
  // parameters: {
  //   docs: {
  //     page: mdx,
  //   },
  // },
  component: SidenavDefault,
}

export const basic = () => ({
  components: { SidenavDefault },
  template: '<SidenavDefault :pages="pages" />',
  router: new VueRouter(),
  data () {
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
