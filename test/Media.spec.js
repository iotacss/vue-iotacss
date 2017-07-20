import { mount } from 'avoriaz'
import { Media } from '../lib'

describe('Media', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(Media, {
      slots: {
        default: Media
      }
    })

    expect(wrapper.contains(Media)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = mount(Media)

    expect(wrapper.hasClass('o-media')).toBe(true);
  })

  test('It accepts gutter property', () => {
    const wrapper = mount(Media,{
      propsData: {
        gutter: 'large'
      }
    })

    expect(wrapper.hasClass('o-media--large')).toBe(true);
  })

  test('It accepts align property', () => {
    const wrapper = mount(Media,{
      propsData: {
        align: 'middle'
      }
    })

    expect(wrapper.hasClass('o-media--middle')).toBe(true);
  })

  test('It accepts res property', () => {
    const wrapper = mount(Media,{
      propsData: {
        res: true
      }
    })

    expect(wrapper.hasClass('o-media--res')).toBe(true);
  })

})
