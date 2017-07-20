import { mount, shallow } from 'avoriaz'

import { H6 } from '../lib'

describe('H6', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(H6, {
      slots: {
        default: H6
      }
    })

    expect(wrapper.contains(H6)).toBe(true)
  })

  test('It has a type size class', () => {
    const wrapper = mount(H6, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true)
  })

  test('It has a default tagName of h6', () => {
    const wrapper = mount(H6)

    expect(wrapper.is('h6')).toBe(true)
  })

})
