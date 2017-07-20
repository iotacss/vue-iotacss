<template>
  <h6 :class="[classes, utilityClasses]">
    <slot></slot>
  </h6>
</template>

<script>
  import { Type } from '../lib'

  export default {
    extends: Type
  }
</script>
