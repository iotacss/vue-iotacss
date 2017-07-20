import { mount, shallow } from 'avoriaz'

import { Type } from '../lib'

describe('Type', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(Type, {
      slots: {
        default: Type
      }
    })

    expect(wrapper.contains(Type)).toBe(true)
  })

  test('It has a class', () => {
    const wrapper = shallow(Type, {
      propsData: {
        size: 'large'
      }
    })

    expect(wrapper.hasClass('o-type-large')).toBe(true);
  })

})
