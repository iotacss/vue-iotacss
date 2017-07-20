import { mount, shallow } from 'avoriaz'

import { Base } from '../lib'


describe('Base', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(Base, {
      slots: {
        default: Base
      }
    })

    expect(wrapper.find('div').length > 0).toBe(true)
  })

  test('It accepts tagName property', () => {
    const wrapper = mount(Base, {
      propsData: {
        tagName: 'h1'
      }
    })

    expect(wrapper.is('h1')).toBe(true)
  })

  test('It parses utility properties', () => {
    const wrapper = mount(Base, {
      propsData: {
        uText: 'center'
      }
    })

    expect(wrapper.hasClass('u-text-center')).toBe(true);
  })

  test('It accepts falsy non-string values for utility props', () => {
    const wrapper = mount(Base, {
      propsData: {
        uCf: false
      }
    })

    expect(wrapper.hasClass('u-cf')).toBe(false);
  })

})
