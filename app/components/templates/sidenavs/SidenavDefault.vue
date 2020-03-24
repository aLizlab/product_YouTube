<template>
  <div class="sidenav sidenav-default">
    <ul class="pages">
      <li
        v-for="(page, i) in pages"
        :key="page.slug"
        :class="{ active: isPagesMore[i]}"
        class="page"
      >
        <nuxt-link
          class="link"
          :to="page.slug"
        >
          <p
            class="label"
            @click="onClickMore(i, true)"
          >
            {{ page.label }}
          </p>
        </nuxt-link>
        <ul
          v-if="page.sections"
          v-show="isPagesMore[i]"
          class="sections"
        >
          <li
            v-for="section in page.sections"
            :key="section.slug"
            class="section"
          >
            <nuxt-link
              class="link"
              :to="section.slug"
            >
              <p class="label">
                {{ section.label }}
              </p>
            </nuxt-link>
          </li>
        </ul>
        <button
          v-if="page.sections"
          class="more"
          aria-label="more"
          @click="onClickMore(i)"
        >
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path d="M7 9.5L12 14.5L17 9.5H7Z" />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { SidenavType } from '@/define/Sidenav'

export default Vue.extend({
  props: {
    /**
     * サイドナビで遷移可能なページを設定します。
     */
    pages: {
      type: Array as PropType<SidenavType[]>,
      required: true,
      default: [],
    },
  },
  data () {
    const isPagesMore = new Array(this.pages.length)

    const nowPageNum = this.pages.findIndex((page) => {
      return page.slug === this.$route.path || (page.sections && page.sections.findIndex((section) => {
        return section.slug === this.$route.path
      }) !== -1)
    })

    isPagesMore[nowPageNum] = !isPagesMore[nowPageNum]

    return {
      isPagesMore,
    }
  },
  methods: {
    onClickMore (num, bool): void {
      this.$set(this.isPagesMore, num, bool || !this.isPagesMore[num])
    },
  },
})
</script>

<style lang="scss" scoped>
  .sidenav-default {
    padding: 8px 0;
    background-color: var(--color-bg-default);
    border-right: 1px solid var(--color-stroke-default);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);

    > .pages {
      > .page {
        position: relative;

        .link {
          background-color: var(--color-button-bg-default);

          > .label {
            padding: 8px 20px;
            color: var(--color-button-label-default);
            font-weight: 700;
            font-size: 1.142rem;
          }

          &.nuxt-link-active {
            background-color: var(--color-button-bg-active);

            > .label {
              color: var(--color-button-label-active);
            }

            ~ .more {
              > .icon {
                fill: var(--color-icon-active);
              }
            }
          }
        }

        > .sections {
          > .section {
            > .link {
              > .label {
                padding-left: 40px;
              }
            }
          }
        }

        > .more {
          position: absolute;
          top: 8px;
          right: 20px;
          display: flex;
          padding: 0;
          border: none;
          background-color: transparent;

          > .icon {
            transform: none;
            width: 24px;
            height: 24px;
            fill: var(--color-icon-default);
          }
        }

        &:first-child {
          > .nuxt-link-active {
            background-color: var(--color-button-bg-default);

            > .label {
              color: var(--color-button-label-default);
            }
          }

          > .nuxt-link-exact-active {
            background-color: var(--color-button-bg-active);

            > .label {
              color: var(--color-button-label-active);
            }
          }
        }

        &.active {
          > .more {
            > .icon {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
</style>
