import { mount, shallow } from 'avoriaz'

import { P } from '../lib'

describe('P', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(P, {
      slots: {
        default: P
      }
    })

    expect(wrapper.contains(P)).toBe(true)
  })

  test('It has a type size class', () => {
    const wrapper = mount(P, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true)
  })

  test('It has a default tagName of p', () => {
    const wrapper = mount(P)

    expect(wrapper.is('p')).toBe(true)
  })

})
