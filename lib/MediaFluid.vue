<template>
  <div class="o-media__fluid" :class="utilityClasses">
    <slot></slot>
  </div>
</template>

<script>
  import { Base } from '../lib'

  export default {
    extends: Base
  }
</script>
