<template>
  <ul class="o-list" :class="[classes, utilityClasses]">
    <slot></slot>
  </ul>
</template>

<script>
  import VueTypes from 'vue-types'
  import { Base } from '../lib'

  const VALIGN_OPTIONS = [
    'top',
    'middle',
    'bottom'
  ]

  const TYPE_OPTIONS = [
    'inline',
    'block',
    'span'
  ]

  export default {
    extends: Base,
    props: {
      gutter: VueTypes.string,
      type: VueTypes.oneOf(TYPE_OPTIONS).def('inline'),
      align: VueTypes.oneOf(VALIGN_OPTIONS)
    },
    computed: {
      classes() {
        return {
          [`o-list--${this.type}`]: this.type,
          [`o-list--${this.gutter}`]: this.gutter,
          [`o-list--${this.align}`]: this.align
        }
      }
    }
  }
</script>
