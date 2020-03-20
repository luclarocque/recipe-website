import { mount } from '@vue/test-utils'
import Homepage from '../Homepage.vue'

describe('Homepage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Homepage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})