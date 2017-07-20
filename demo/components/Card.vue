<template>
  <Base class="c-card">
    <slot></slot>
  </Base>
</template>

<script>
  import { Base } from '../../lib'
</script>

<style lang="scss">
  @import '../scss/settings/baseline';
  @import '../scss/settings/colors';


  .c-card {
    padding: $baseline-x5;
    background: rgba($color-white, 0.8);
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(28,45,157,0.28);
  }


  .c-card--light { background: rgba($color-white, 0.5) }
</style>
