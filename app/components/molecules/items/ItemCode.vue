<template>
  <div class="item item-code">
    <p class="file-name">
      <slot name="fileName">
        File Name
      </slot>
    </p>
    <pre class="code"><slot name="code">Code</slot></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
  .item-code {
    position: relative;
    display: flex;
    padding: 0 20px;
    background-color: var(--color-bg-code);

    > .file-name {
      position: absolute;
      top: 0;
      left: 20px;
      padding: 2px 4px;
      font-size: 12px;
      color: var(--color-font-tag);
      background-color: var(--color-bg-tag);
    }

    > .code {
      display: flex;
      width: 100%;
      max-width: 100%;
      padding: 14px 0 0;
      white-space: pre;
      overflow-x: scroll;
    }
  }
</style>
