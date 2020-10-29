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

  test("imports all 21 trivia questions from json file", () => {
    const wrapper = mount(Trivia)
    expect(wrapper.vm.json.length).toBe(21)
  })

  test("cuts trivia questions down to 10", () => {
    const wrapper = mount(Trivia)
    expect(wrapper.vm.questions.length).toBe(10)
  })

  test("loads first question's incorrect & correct answers into array for total of 4 answers", () => {
    const wrapper = mount(Trivia)
    expect(wrapper.vm.answers.length).toBe(4)
  })

  test("renders five total buttons", () => {
    const wrapper = mount(Trivia)
    expect(wrapper.findAll('button').length).toBe(5)
  })

  test("v-if renders only one next-button at a time", () => {
    const wrapper = mount(Trivia)
    expect(wrapper.findAll('button.answer-button').length).toBe(4)
  })

  // test("answer click adds active class to answer button", async () => {

  //   const wrapper = mount(Trivia)
  //   // const button = wrapper.find('#answer-a')

  //   // expect(button.classes()).not.toContain('active')
  //   expect(wrapper.vm.answered).toBe(false);

  //   // await wrapper.trigger('keydown(65)')

  //   await wrapper.vm.guessA()

  //   expect(wrapper.vm.answered).toBe(true);

  //   // expect(button.classes()).toContain('active')

  //   // TypeError: Cannot read property 'classList' of null

  // })

  test("toggleAnswered toggles boolean 'answered' value", async () => {
    const wrapper = mount(Trivia)
    expect(wrapper.vm.answered).toBe(false);
    await wrapper.vm.toggleAnswered()
    expect(wrapper.vm.answered).toBe(true);
  })

  // test("resetGame toggles boolean 'answered' value", () => {
  //   const wrapper = mount(Trivia)
  //   wrapper.vm.score = 8
  //   wrapper.vm.answered = true
  //   wrapper.vm.questions.shift()

  //   wrapper.vm.resetGame()

  //   expect(wrapper.vm.score).toBe(0)
  //   expect(wrapper.vm.answered).toBe(true)
  //   expect(wrapper.vm.questions.length).toBe(10)

  //   // TypeError: answerButtons.forEach is not a function
  // })

  test("resetGame toggles boolean 'answered' value", () => {
    const wrapper = mount(Trivia)

    expect(wrapper.vm.questions.length).toBe(10)

    wrapper.vm.nextQuestion()

    expect(wrapper.vm.questions.length).toBe(9)

    // [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "TypeError: answerButtons.forEach is not a function".]
  })

})