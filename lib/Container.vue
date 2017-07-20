<template>
  <div class="o-container" :class="[classes, utilityClasses]">
    <slot></slot>
  </div>
</template>

<script>
  import VueTypes from 'vue-types'
  import { Base } from '../lib'

  export default {
    extends: Base,
    props: {
      gutter: VueTypes.string,
      size: VueTypes.string
    },
    computed: {
      classes() {
        return {
          [`o-container--${this.gutter}`]: this.gutter,
          [`o-container--${this.size}`]: this.size
        }
      }
    }
  }
</script>
