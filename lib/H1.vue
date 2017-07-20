<template>
  <h1 :class="[classes, utilityClasses]">
    <slot></slot>
  </h1>
</template>

<script>
  import { Type } from '../lib'

  export default {
    extends: Type
  }
</script>
