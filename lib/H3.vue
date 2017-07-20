<template>
  <h3 :class="[classes, utilityClasses]">
    <slot></slot>
  </h3>
</template>

<script>
  import { Type } from '../lib'

  export default {
    extends: Type
  }
</script>
