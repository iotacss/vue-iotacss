import { mount, shallow } from 'avoriaz'

import { H4 } from '../lib'

describe('H4', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(H4, {
      slots: {
        default: H4
      }
    })

    expect(wrapper.contains(H4)).toBe(true)
  })

  test('It has a type size class', () => {
    const wrapper = mount(H4, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true)
  })

  test('It has a default tagName of h4', () => {
    const wrapper = mount(H4)

    expect(wrapper.is('h4')).toBe(true)
  })

})
