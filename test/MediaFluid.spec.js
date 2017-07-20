import { mount } from 'avoriaz'

import { MediaFluid } from '../lib'

describe('MediaFluid', () => {

  test('It renders a child when passed in', () => {
    const wrapper = mount(MediaFluid, {
      slots: {
        default: MediaFluid
      }
    })

    expect(wrapper.contains(MediaFluid)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = mount(MediaFluid)

    expect(wrapper.hasClass('o-media__fluid')).toBe(true);
  })

})
