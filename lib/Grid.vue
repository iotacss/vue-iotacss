<template>
  <div :tagName="tagName" class="o-grid" :class="[classes, utilityClasses]">
    <slot></slot>
  </div>
</template>

<script>
  import VueTypes from 'vue-types'
  import { Base } from '../lib'

  const VALIGN_OPTIONS = [
    'right',
    'center',
    'top',
    'middle',
    'bottom',
    'around',
    'between'
  ]

  export default {
    extends: Base,
    props: {
      tagName: VueTypes.string.def('div'),
      gutter: VueTypes.string,
      align: VueTypes.oneOf(VALIGN_OPTIONS),
      rev: VueTypes.bool.def(false),
      res: VueTypes.bool.def(false),
      equalHeight: VueTypes.bool.def(false)
    },
    computed: {
      classes() {
        return {
          [`o-grid--${this.gutter}`]: this.gutter,
          [`o-grid--${this.align}`]: this.align,
          'o-grid--rev': this.rev,
          'o-grid--res': this.res,
          'o-grid--equal-height': this.equalHeight
        }
      }
    }
  }
</script>
