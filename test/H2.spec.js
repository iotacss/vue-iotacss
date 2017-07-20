import { mount, shallow } from 'avoriaz'

import { H2 } from '../lib'

describe('H2', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(H2, {
      slots: {
        default: H2
      }
    })

    expect(wrapper.contains(H2)).toBe(true)
  })

  test('It has a type size class', () => {
    const wrapper = mount(H2, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true)
  })

  test('It has a default tagName of h2', () => {
    const wrapper = mount(H2)

    expect(wrapper.is('h2')).toBe(true)
  })

})
