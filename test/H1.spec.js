import { mount, shallow } from 'avoriaz'

import { H1 } from '../lib'

describe('H1', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(H1, {
      slots: {
        default: H1
      }
    })

    expect(wrapper.contains(H1)).toBe(true)
  })

  test('It has a type size class', () => {
    const wrapper = mount(H1, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true)
  })

  test('It has a default tagName of h1', () => {
    const wrapper = mount(H1)

    expect(wrapper.is('h1')).toBe(true)
  })

})
