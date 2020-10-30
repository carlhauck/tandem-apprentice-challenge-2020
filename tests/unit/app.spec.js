import { mount } from "@vue/test-utils"
import App from './../../src/App.vue'

describe("App.vue", () => {

  test("sanity test", () => {
    console.log(App)
  })

  test("renders app", () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('tandem')
  })

  test("imports all 21 trivia questions from json file", () => {
    const wrapper = mount(App)
    expect(wrapper.vm.json.length).toBe(21)
  })

  test("cuts trivia questions down to 10", () => {
    const wrapper = mount(App)
    expect(wrapper.vm.questions.length).toBe(10)
  })

  // will fail if one of the questions is shuffled to front (since it only has 3 answers)
  test("loads first question's incorrect & correct answers into array for total of 4 answers", () => {
    const wrapper = mount(App)
    expect(wrapper.vm.answers.length).toBe(4)
  })

})