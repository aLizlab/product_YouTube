<template>
  <section class="section section-nuxt">
    <h1 class="title">
      <!-- @slot ページのタイトルを設定します（必須） -->
      <slot name="title" />
    </h1>
    <p class="intro">
      <!-- @slot ページのイントロを設定します（必須） -->
      <slot name="intro" />
    </p>
    <ChapterDefault :chapters="chapters" />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { PageNuxtChapterType } from '@/define/models/page/Page'

export default Vue.extend({
  components: {
    ChapterDefault: () => import('@/components/organisms/chapters/ChapterDefault.vue'),
  },
  props: {
    /**
     * チャプター内のコンテンツを設定します。
     */
    chapters: {
      type: Array as PropType<PageNuxtChapterType[]>,
      required: true,
      default: [],
    },
  },
})
</script>

<style lang="scss" scoped>
  .section-nuxt {
    > * {
      margin-top: 40px;

      &:first-child {
        margin-top: 0;
      }
    }

    > .title {
      font-weight: 800;
      font-size: 2.857rem;
      line-height: 1em;
    }

    > .intro {
      font-style: italic;
      color: var(--color-font-gray);
    }
  }
</style>
