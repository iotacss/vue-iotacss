import { mount } from 'avoriaz'

import { MediaFixed } from '../lib'

describe('MediaFixed', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(MediaFixed, {
      slots: {
        default: MediaFixed
      }
    })

    expect(wrapper.contains(MediaFixed)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = mount(MediaFixed)

    expect(wrapper.hasClass('o-media__fixed')).toBe(true);
  })

})
