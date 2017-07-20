<template>
  <li class="o-list__item" :class="utilityClasses">
    <slot></slot>
  </li>
</template>

<script>
  import { Base } from '../lib'

  export default {
    extends: Base
  }
</script>
