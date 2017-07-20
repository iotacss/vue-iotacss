<template>
  <p :class="[classes, utilityClasses]">
    <slot></slot>
  </p>
</template>

<script>
  import { Type } from '../lib'

  export default {
    extends: Type
  }
</script>
