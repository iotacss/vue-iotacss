import { mount } from 'avoriaz';
import { ListItem } from '../lib'

describe('ListItem', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(ListItem, {
      slots: {
        default: ListItem
      }
    })

    expect(wrapper.contains(ListItem)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = mount(ListItem)

    expect(wrapper.hasClass('o-list__item')).toBe(true);
  })

})
