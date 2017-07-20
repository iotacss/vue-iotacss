<template>
  <Base uBgcolor="purple" uPv="x2" :class="utilityClasses">
    <Container>
      <Media align="middle" res>
        <MediaFixed uText="center left@sm" uMb="x3@xs">
          <a href="#">
            <img :src="logo" />
          </a>
        </MediaFixed>
        <MediaFluid>
          <List gutter="x4" uText="center right@sm" uColor="white" uWeight="bold">
            <ListItem>
              <a href="#">List Item 1</a>
            </ListItem>
            <ListItem>
              <a href="#">List Item 2</a>
            </ListItem>
            <ListItem>
              <a href="#">List Item 3</a>
            </ListItem>
          </List>
        </MediaFluid>
      </Media>
    </Container>
  </Base>
</template>

<script>
  import {
    Base,
    Container,
    List,
    ListItem,
    Media,
    MediaFixed,
    MediaFluid
  } from '../../lib'

  import mixin from '../../lib/utils/mixin'

  import logo from '../svg/logo.svg'

  export default {
    mixins: [mixin],
    data() {
      return {
        logo: logo
      }
    }
  }
</script>
