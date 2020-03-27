<template>
  <div class="code code-default">
    Code
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { PageNuxtChapterCodeType } from '@/define/models/page/Page'

export default Vue.extend({
  props: {
    codes: {
      type: Object as PropType<PageNuxtChapterCodeType>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
  .code-default {
  }
</style>
