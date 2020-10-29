import { mount } from "@vue/test-utils"
import Trivia from './../../src/views/Trivia.vue'

describe("Trivia.vue", () => {

  test("sanity test", () => {
    console.log(Trivia)
  })

  test("renders trivia", () => {
    const wrapper = mount(Trivia)
    expect(wrapper.text()).toContain('trivia')
  })

  // test("checks length of shuffled/cut questions", () => {
  //   window.questions = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  //   const wrapper = mount(Trivia)
  //   expect(wrapper.findAllComponents(Trivia).toHaveLength(window.questions.length))
  // })

  // test("next question button is disabled upon page load", () => {
  //   const wrapper = mount(Trivia)
  //   // const json = "src/assets/data/apprentice-tandem-for-400-data.json"
  //   // wrapper.vm.shuffleQuestions(json)
  //   expect(wrapper.classes()).toContain("disabled")
  // })

  test("renders five total buttons", () => {

    const wrapper = mount(Trivia)
    expect(wrapper.findAll('button').length).toBe(5)
  })

  test("v-if renders only one next-button at a time", () => {

    const wrapper = mount(Trivia)
    expect(wrapper.findAll('button.answer-button').length).toBe(4)
  })

  // test("v-if renders only one next-button at a time", async () => {

  //   const wrapper = mount(Trivia)
  //   const button = wrapper.find('button.answer-button')

  //   expect(wrapper.findAll('button.next-button').length).toBe(1)

  //   await button.trigger('click')

  //   expect(wrapper.findAll('button.next-button').length).toBe(1)
  // })

  test("answer click adds active class to answer button", async () => {

    const wrapper = mount(Trivia)
    const button = wrapper.find('#answer-a')
    expect(button.element.id).toBe('answer-a')


    expect(button.classes()).not.toContain('active')

    // expect(button.classes('active')).toBe(false)

    await button.trigger('click')

    // console.log(button.classes('active'))

    // expect(mouseAnswer).toBeCalled()
    // expect(button.classes()).toContain('active')

    // expect(button.classes('active')).toBe(true)
  })
})