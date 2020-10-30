import { mount } from "@vue/test-utils"
import Score from './../../src/components/Score.vue'

describe("Score.vue", () => {

  test("sanity test", () => {
    console.log(Score)
  })

  test("renders appropriate score", () => {
    const wrapper = mount(Score, {
      propsData: {
        score: 7
      },
    })
    expect(wrapper.html()).toContain('score')
    expect(wrapper.html()).toContain('7')
  })

})