import { mount, shallow } from 'avoriaz'

import { GridColumn } from '../lib'

describe('GridColumn', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(GridColumn, {
      propsData: {
        slots: GridColumn
      }
    })

    expect(wrapper.find('div').length > 0).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = mount(GridColumn)

    expect(wrapper.hasClass('o-grid__col')).toBe(true);
  })

})
