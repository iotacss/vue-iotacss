<template>
  <div class="o-media" :class="[classes, utilityClasses]">
    <slot></slot>
  </div>
</template>

<script>
  import VueTypes from 'vue-types'
  import { Base } from '../lib'

  const VALIGN_OPTIONS = [
    'top',
    'middle',
    'bottom'
  ]

  export default {
    extends: Base,
    props: {
      gutter: VueTypes.string,
      align: VueTypes.oneOf(VALIGN_OPTIONS),
      rev: VueTypes.bool.def(false),
      res: VueTypes.bool.def(false)
    },
    computed: {
      classes() {
        return {
          [`o-media--${this.gutter}`]: this.gutter,
          [`o-media--${this.align}`]: this.align,
          'o-media--rev': this.rev,
          'o-media--res': this.res
        }
      }
    }
  }
</script>
