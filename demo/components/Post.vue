<template>
  <Media gutter="x4" :class="utilityClasses">
    <MediaFixed>
      <P size="ms1" uColor="grey">{{date}}</P>
    </MediaFixed>
    <MediaFluid>
      <P size="ms1" uColor="purple">
        <a href="#">{{title}}</a>
      </P>
    </MediaFluid>
  </Media>
</template>

<script>
  import VueTypes from 'vue-types'

  import {
    Media,
    MediaFixed,
    MediaFluid,
    P
  } from '../../lib'

  import mixin from '../../lib/utils/mixin'

  export default {
    mixins: [mixin],
    props: {
      title: VueTypes.string,
      date: VueTypes.string
    }
  }
</script>
