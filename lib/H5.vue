<template>
  <h5 :class="[classes, utilityClasses]">
    <slot></slot>
  </h5>
</template>

<script>
  import { Type } from '../lib'

  export default {
    extends: Type
  }
</script>
