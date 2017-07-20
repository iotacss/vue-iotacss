import { mount, shallow } from 'avoriaz'

import { H5 } from '../lib'

describe('H5', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(H5, {
      slots: {
        default: H5
      }
    })

    expect(wrapper.contains(H5)).toBe(true)
  })

  test('It has a type size class', () => {
    const wrapper = mount(H5, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true)
  })

  test('It has a default tagName of h5', () => {
    const wrapper = mount(H5)

    expect(wrapper.is('h5')).toBe(true)
  })

})
