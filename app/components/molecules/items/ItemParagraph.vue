<template>
  <div class="item item-paragraph">
    <h2 class="title">
      <!-- @slot チャプターのタイトルを設定します（必須） -->
      <slot name="title">
        Title
      </slot>
    </h2>
    <div class="texts">
      <!-- @slot チャプターのテキストを設定します。 -->
      <slot name="texts" />
    </div>
    <div class="codes">
      <!-- @slot チャプターのコードを設定します。 -->
      <slot name="codes" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
  .item-paragraph {
    > * {
      margin-top: 8px;

      &:first-child {
        margin-top: 0;
      }
    }

    > .title {
      font-size: 1.714rem;
    }

    > .texts,
    > .codes {
      transform: translateX(-10px);
      display: flex;
      width: calc(100% + 20px);

      > * {
        flex: 1;
        max-width: calc(100% - 20px);
        margin: 0 10px;
      }
    }

    > .texts {
      white-space: pre-line;
    }
  }
</style>
