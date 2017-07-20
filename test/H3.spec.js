import { mount, shallow } from 'avoriaz'

import { H3 } from '../lib'

describe('H3', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(H3, {
      slots: {
        default: H3
      }
    })

    expect(wrapper.contains(H3)).toBe(true)
  })

  test('It has a type size class', () => {
    const wrapper = mount(H3, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true)
  })

  test('It has a default tagName of h3', () => {
    const wrapper = mount(H3)

    expect(wrapper.is('h3')).toBe(true)
  })

})
