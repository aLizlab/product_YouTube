<template>
  <div class="chapter chapter-default">
    <ParagraphDefault
      v-for="(chapter, i) in chapters"
      :key="i"
    >
      <template #title>
        {{ chapter.title }}
      </template>
      <template #texts>
        <p
          v-for="(text, j) in chapter.texts"
          :key="j"
          v-html="text"
        />
      </template>
    </ParagraphDefault>
  </div>
</template>

<script lang="ts">
/* eslint vue/no-v-html: 0 */
import Vue, { PropType } from 'vue'

import { PageNuxtChapterType } from '@/define/models/page/Page'

export default Vue.extend({
  components: {
    ParagraphDefault: () => import('@/components/molecules/items/ItemParagraph.vue'),
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
  .chapter-default {
    > * {
      margin-top: 32px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
