<template>
  <header class="header header-default">
    <div class="container">
      <div class="left">
        <nuxt-link
          class="link"
          to="/"
        >
          <h1 class="label">
            aLiz STUDIO
          </h1>
        </nuxt-link>
      </div>
      <div class="right">
        <ul class="pages">
          <li class="page">
            <nuxt-link
              class="link"
              to="/nuxt"
            >
              <p class="label">
                Nuxt
              </p>
            </nuxt-link>
          </li>
          <li class="page">
            <nuxt-link
              class="link"
              to="/api"
            >
              <p class="label">
                API
              </p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderDefault',
})
</script>

<style lang="scss" scoped>
  .header-default {
    width: 100%;
    padding: 0 16px;
    background-color: var(--color-bg-default);
    border-bottom: 1px solid var(--color-stroke-default);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);

    > .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      > .left {
        > .link {
          > .label {
            padding: 8px;
            color: var(--color-button-label-default);
            font-weight: 800;
            font-size: 2.285rem;
          }
        }
      }

      > .right {
        > .pages {
          display: flex;
          align-items: center;

          > .page {
            > .link {
              background-color: var(--color-button-bg-default);

              > .label {
                padding: 17px 12px;
                color: var(--color-button-label-default);
                font-weight: 700;
                font-size: 1.428rem;
              }

              &.nuxt-link-active {
                background-color: var(--color-button-bg-active);

                > .label {
                  color: var(--color-button-label-active);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
