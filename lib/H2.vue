<template>
  <h2 :class="[classes, utilityClasses]">
    <slot></slot>
  </h2>
</template>

<script>
  import { Type } from '../lib'

  export default {
    extends: Type
  }
</script>
