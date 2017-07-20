import VueTypes from 'vue-types'

import utilities from './utilsList'

export default {
  props: {
    tagName: VueTypes.string,
    /** Applies vertical align using align utility */
    uAlign: VueTypes.string,
    /** Applies background color value using bgcolor utility */
    uBgcolor: VueTypes.string,
    /** Applies clearfix using clearfix utility */
    uCf: VueTypes.bool.def(false),
    /** Applies color value using color utility */
    uColor: VueTypes.string,
    /** Applies display type using display utility */
    uDisplay: VueTypes.string,
    /** Applies float direction using float utility */
    uFloat: VueTypes.string,
    /** Applies margin using margin utility */
    uM: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies margin top using margin utility */
    uMt: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies margin right using margin utility */
    uMr: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies margin bottom using margin utility */
    uMb: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies margin left using margin utility */
    uMl: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies vertical margin using margin utility */
    uMv: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies horizontal margin using margin utility */
    uMh: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies opacity size using opacity utility */
    uOpacity: VueTypes.string,
    /** Applies padding using margin utility */
    uP: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies padding top using margin utility */
    uPt: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies padding right using margin utility */
    uPr: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies padding bottom using margin utility */
    uPb: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies padding left using margin utility */
    uPl: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies vertical padding using margin utility */
    uPv: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies horizontal padding using margin utility */
    uPh: VueTypes.oneOfType([VueTypes.bool, VueTypes.string]),
    /** Applies position type using position utility */
    uPosition: VueTypes.string,
    /** Applies after offset using pull utility */
    uPull: VueTypes.string,
    /** Applies offset using push utility */
    uPush: VueTypes.string,
    /** Applies width size using size utility */
    uSize: VueTypes.string,
    /** Applies text alignment using text utility */
    uText: VueTypes.string,
    /** Applies text transform using transform utility */
    uTransform: VueTypes.string,
    /** Applies font weight size using weight utility */
    uWeight: VueTypes.string
  },
  computed: {
    utilityClasses() {
      let className = ''
      const propKeys = Object.keys(this._props)
      const classNames = propKeys.map(propKey => {
        const utilityKey = propKey.substr(1).toLowerCase()
        const utilityValue = this._props[propKey] === true ? '' : this._props[propKey]
        const utility = utilities.find(util => { return util.name.toLowerCase() === utilityKey })

        if (utility && this[propKey]) {
          const utilityValues = typeof utilityValue === 'string' ? utilityValue.split(' ') : [];

          return utilityValues.map(utilityValue => {

            className = 'u'

            if (utility.namespace.length > 0) {
              className += `-${utility.namespace}`
            }

            if (utilityValue === 'all') {
              utilityValue = ''
            } else if (utilityValue.startsWith('@')) {
              utilityValue.replace('@', '')
              className += utilityValue
            } else {
              if (utilityValue.length) {
                className += `-${utilityValue}`
              }
            }

            return className
          })

        }
      })

      return classNames
    }
  }
}
