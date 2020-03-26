import ChapterDefault from './ChapterDefault.vue'

// @ts-ignore
// import mdx from './ChapterDefault.mdx'

export default {
  title: 'organisms/chapters/ChapterDefault',
  // parameters: {
  //   docs: {
  //     page: mdx,
  //   },
  // },
  component: ChapterDefault,
}

export const basic = () => ({
  components: { ChapterDefault },
  template: '<ChapterDefault :chapters="chapters" />',
  data () {
    return {
      chapters: [
        {
          title: 'Vue.jsとは？',
          texts: [
            `HTML/CSS/JavaScriptのフレームワークの一つ。表示をする部分に焦点を当てたフレームワークのため、変化がわかりやすくいのが特徴。

            日本では他のフレームワーク（Rea.js, Angular.js, Svelte.jsなど）に比べて人気があり、日本語のドキュメントも充実しています。そのため初心者にもおすすめ。`,
          ],
        },
        {
          title: 'Nuxt.jsとは？',
          texts: [
            `Vue.jsのフレームワークをさらに使いやすくしたフレームワーク。Vue.jsで少し面倒な設定や物足りない機能をあらかじめ用意してくれています。

            機能が増えたためVue.jsよりもルールが少し増えますが面倒な設定などがなくなるので、初心者にはこちらの方がおすすめです。`,
          ],
        },
      ],
    }
  },
})
