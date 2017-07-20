<template>
  <div class="o-grid__col" :class="utilityClasses">
    <slot></slot>
  </div>
</template>

<script>
  import { Base } from '../lib'

  export default {
    extends: Base 
  }
</script>
