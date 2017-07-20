import { mount, shallow } from 'avoriaz'

import Container from '../lib/Container'


describe('Container', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(Container, {
      slots: {
        default: Container
      }
    })

    expect(wrapper.find('div').length > 0).toBe(true)
  })

  test('It has a class', () => {
    const wrapper = mount(Container)

    expect(wrapper.hasClass('o-container')).toBe(true)
  })

  test('It accepts gutter property', () => {
    const wrapper = mount(Container, {
      propsData: {
        gutter: 'test'
      }
    })
    const div = wrapper.find('div')[0]

    expect(div.is('div')).toBe(true)
  })

  test('It accepts size property', () => {
    const wrapper = mount(Container, {
      propsData: {
        size: 'test'
      }
    })

    expect(wrapper.hasClass('o-container--test')).toBe(true)
  })
})
