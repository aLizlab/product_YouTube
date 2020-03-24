import HeaderDefault from './HeaderDefault.vue'

// @ts-ignore
import mdx from './HeaderDefault.mdx'

export default {
  title: 'templates/headers/HeaderDefault',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: HeaderDefault,
}

export const basic = () => ({
  components: { HeaderDefault },
  template: `<HeaderDefault />`,
})
