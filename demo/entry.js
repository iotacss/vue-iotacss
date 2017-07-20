import Vue from 'vue'

import App from './App.vue'

import {
  Base,
  Container,
  Grid,
  GridColumn,
  List,
  ListItem,
  Media,
  MediaFixed,
  MediaFluid,
  Type,
  H1, H2, P
} from '../lib'

import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Post from './components/Post.vue'

Vue.component('Base', Base)
Vue.component('Container', Container)
Vue.component('Grid', Grid)
Vue.component('GridColumn', GridColumn)
Vue.component('List', List)
Vue.component('ListItem', ListItem)
Vue.component('Media', Media)
Vue.component('MediaFixed', MediaFixed)
Vue.component('MediaFluid', MediaFluid)
Vue.component('Type', Type)
Vue.component('H1', H1)
Vue.component('H2', H2)
Vue.component('P', P)

Vue.component('Button', Button)
Vue.component('Card', Card)
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Post', Post)

new Vue({
  el: '#app',
  render: h => h(App)
})
