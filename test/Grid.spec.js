import { mount, shallow } from 'avoriaz'

import Grid from '../lib/Grid'


describe('Grid', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(Grid, {
      slots: {
        default: Grid
      }
    })

    expect(wrapper.find('div').length > 0).toBe(true)
  })

  test('It has a class', () => {
    const wrapper = mount(Grid)

    expect(wrapper.hasClass('o-grid')).toBe(true);
  })

  test('It accepts gutter property', () => {
    const wrapper = shallow(Grid, {
      propsData: {
        gutter: 'test'
      }
    })

    expect(wrapper.hasClass('o-grid--test')).toBe(true);
  })

  test('It accepts align property', () => {
    const wrapper = shallow(Grid, {
      propsData: {
        align: 'bottom'
      }
    })

    expect(wrapper.hasClass('o-grid--bottom')).toBe(true);
  })

  test('It accepts rev property', () => {
    const wrapper = shallow(Grid, {
      propsData: {
        rev: true
      }
    })

    expect(wrapper.hasClass('o-grid--rev')).toBe(true);
  })

  test('It accepts res property', () => {
    const wrapper = shallow(Grid, {
      propsData: {
        res: true
      }
    })

    expect(wrapper.hasClass('o-grid--res')).toBe(true);
  })

  test('It accepts equalHeight property', () => {
    const wrapper = shallow(Grid, {
      propsData: {
        equalHeight: true
      }
    })

    expect(wrapper.hasClass('o-grid--equal-height')).toBe(true);
  })

})
