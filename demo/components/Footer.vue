<template>
  <Base uBgcolor="purple" uColor="white" uPv="x3">
    <Container>
      <Media align="middle" res rev>
        <MediaFixed uText="center left@sm" uMb="x2@xs">
          <Type uWeight="bold">Follow us on twitter</Type>
        </MediaFixed>
        <MediaFluid uText="center left@sm">
          <Type>Copyright © 2017 iotaCSS. All rights reserved.</Type>
        </MediaFluid>
      </Media>
    </Container>
  </Base>
</template>

<script>
  import {
    Base,
    Container,
    Media,
    MediaFixed,
    MediaFluid,
    Type
  } from '../../lib'

  import mixin from '../../lib/utils/mixin'

  export default {
    mixins: [mixin]
  }
</script>
