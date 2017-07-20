<template>
  <h4 :class="[classes, utilityClasses]">
    <slot></slot>
  </h4>
</template>

<script>
  import { Type } from '../lib'

  export default {
    extends: Type
  }
</script>
