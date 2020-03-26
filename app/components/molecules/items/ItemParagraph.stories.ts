import ItemParagraph from './ItemParagraph.vue'

// @ts-ignore
// import mdx from './ItemParagraph.mdx'

export default {
  title: 'molecules/items/ItemParagraph',
  // parameters: {
  //   docs: {
  //     page: mdx,
  //   },
  // },
  component: ItemParagraph,
}

export const basic = () => ({
  components: { ItemParagraph },
  template: `<ItemParagraph>
      <template #title>
        {{ title }}
      </template>
      <template #texts>
        <p
          v-for="(text, j) in texts"
          :key="j"
          v-html="text"
        />
      </template>
    </ItemParagraph>`,
  data () {
    return {
      title: 'Vue.jsとは？',
      texts: [
        `HTML/CSS/JavaScriptのフレームワークの一つ。表示をする部分に焦点を当てたフレームワークのため、変化がわかりやすくいのが特徴。

        日本では他のフレームワーク（Rea.js, Angular.js, Svelte.jsなど）に比べて人気があり、日本語のドキュメントも充実しています。そのため初心者にもおすすめ。`,
      ],
    }
  },
})
