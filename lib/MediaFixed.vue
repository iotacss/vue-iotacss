<template>
  <div class="o-media__fixed" :class="utilityClasses">
    <slot></slot>
  </div>
</template>

<script>
  import { Base } from '../lib'
  
  export default {
    extends: Base
  }
</script>
