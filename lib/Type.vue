<template>
  <Base :tagName="tagName" :class="[classes, utilityClasses]">
    <slot></slot>
  </Base>
</template>

<script>
  import VueTypes from 'vue-types'

  import { Base } from '../lib'

  export default {
    extends: Base,
    props: {
      size: VueTypes.string,
      tagName: VueTypes.string.def('p')
    },
    computed: {
      classes() {
        return {
          [`o-type-${this.size}`]: this.size
        }
      }
    }
  }
</script>
