import { mount } from "@vue/test-utils"
import AnswerButton from './../../src/components/AnswerButton.vue'

describe("AnswerButton.vue", () => {

  test("sanity test", () => {
    console.log(AnswerButton)
  })

  it("button click changes isActive status and emits", async () => {
    const wrapper = mount(AnswerButton, {
      propsData: {
        answer: "Q",
        answers: ["M", "Z", "X", "Q"],
        answerSubmitted: false,
        questions: [
          {
            "question": "What is the only letter that doesn't appear in a US state name?",
            "incorrect": ["M", "Z", "X"],
            "correct": "Q"
          }
        ],
        selectedAnswerId: null,
        correctAnswerId: 3,
        answerId: 3,
      },
      data() {
        return {
          isActive: false
        }
      }
    });
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.isActive).toBe(true)
    expect(wrapper.emitted('selectAnswer').length).toBe(1)
  })
})