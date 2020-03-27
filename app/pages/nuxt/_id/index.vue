<template>
  <div class="page page-nuxt-id">
    <SectionNuxt :chapters="chapters">
      <template #title>
        {{ title }}
      </template>
      <template #intro>
        {{ intro }}
      </template>
    </SectionNuxt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { PageNuxtType } from '@/define/models/page/Page'
import { Context } from '@nuxt/types'

// InstanceJson = '@/assets/json/nuxt/instance.json'

export default Vue.extend({
  components: {
    SectionNuxt: () => import('@/components/templates/sections/SectionNuxt.vue'),
  },
  asyncData ({ route }: Context): PageNuxtType {
    let pageTexts: PageNuxtType = {
      title: '',
      intro: '',
      chapters: [],
    }

    const nowPath = route.path.replace('/nuxt/', '')

    const InstanceJson = require('@/assets/json/nuxt/instance.json').top

    switch (nowPath) {
      case 'instance':
        pageTexts = InstanceJson
        break
      default:
    }

    return pageTexts
  },
})
</script>

<style lang="scss" scoped>
  .page-nuxt-id {
    width: 100%;
    padding: 20px;
  }
</style>
