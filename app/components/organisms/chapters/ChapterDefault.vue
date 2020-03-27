<template>
  <div class="chapter chapter-default">
    <ItemParagraph
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
      <template #codes>
        <CodeDefault
          v-for="(code, j) in chapter.codes"
          :key="j"
          :class="{ 'two-code': chapter.codes.length === 2 }"
        >
          <template #fileName>
            {{ code.fileName }}
          </template>
          <template #code>
            <code>
{{ code.code }} <!-- eslint-disable-line vue/html-indent -->
            </code>
          </template>
        </CodeDefault>
      </template>
    </ItemParagraph>
  </div>
</template>

<script lang="ts">
/* eslint vue/no-v-html: 0 */
import Vue, { PropType } from 'vue'

import { PageNuxtChapterType } from '@/define/models/page/Page'

export default Vue.extend({
  components: {
    ItemParagraph: () => import('@/components/molecules/items/ItemParagraph.vue'),
    CodeDefault: () => import('@/components/molecules/items/ItemCode.vue'),
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

      .two-code {
        max-width: calc(50% - 20px) !important;
      }
    }
  }
</style>
