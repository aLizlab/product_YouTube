import SectionNuxt from './SectionNuxt.vue'

// @ts-ignore
// import mdx from './SectionNuxt.mdx'

export default {
  title: 'templates/sections/SectionNuxt',
  // parameters: {
  //   docs: {
  //     page: mdx,
  //   },
  // },
  component: SectionNuxt,
}

export const basic = () => ({
  components: { SectionNuxt },
  template: `<SectionNuxt :chapters="chapters">
      <template #title>
        {{ title }}
      </template>
      <template #intro>
        {{ intro }}
      </template>
    </SectionNuxt>`,
  data () {
    return {
      title: 'はじめに',
      intro: 'Nuxt.js, Vue.jsの簡単な紹介。（基本的にVue.jsの機能をNuxt.jsの機能として紹介していきます。）',
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
