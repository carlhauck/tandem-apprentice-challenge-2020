import { mount } from "@vue/test-utils"
import Banner from './../../src/components/Banner.vue'

describe("Banner.vue", () => {

  test("sanity test", () => {
    console.log(Banner)
  })

  test("renders answer container", () => {
    const wrapper = mount(Banner)
    expect(wrapper.html()).toContain('page-title')
  })

})