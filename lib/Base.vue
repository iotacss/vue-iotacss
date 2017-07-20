<script>
  import VueTypes from 'vue-types'
  import mixin from './utils/mixin'

  export default {
    mixins: [mixin],
    render: function (createElement) {
      return createElement(
        this.tagName,
        {
          class: this.utilityClasses
        },
        this.$slots.default
      )
    },
    props: {
      tagName: VueTypes.string.def('div')
    }
  }
</script>
