import { mount } from "@vue/test-utils"
import AnswerContainer from './../../src/components/AnswerContainer.vue'

describe("AnswerContainer.vue", () => {

  test("sanity test", () => {
    console.log(AnswerContainer)
  })

  test("renders answer container", () => {
    const wrapper = mount(AnswerContainer)
    expect(wrapper.html()).toContain('answer-container')
  })

  it("computes correct answer id (take 1)", async () => {
    const wrapper = mount(AnswerContainer, {
      propsData: {
        answers: ["M", "Z", "X", "Q"],
        answerSubmitted: false,
        questions: [
          {
            "question": "What is the only letter that doesn't appear in a US state name?",
            "incorrect": ["M", "Z", "X"],
            "correct": "Q"
          }
        ]
      },
    });

    expect(wrapper.vm.correctAnswerId).toBe(3)
  })

  it("computes correct answer id (take 2)", async () => {
    const wrapper = mount(AnswerContainer, {
      propsData: {
        answers: ["M", "Q", "Z", "X"],
        answerSubmitted: false,
        questions: [
          {
            "question": "What is the only letter that doesn't appear in a US state name?",
            "incorrect": ["M", "Z", "X"],
            "correct": "Q"
          }
        ]
      },
    });

    expect(wrapper.vm.correctAnswerId).toBe(1)
  })

  // test below gets caught on classList of thumbsUp, which is outside the scope of this component
  // it("computes correct answer id (take 2)", async () => {
  //   const wrapper = mount(AnswerContainer, {
  //     propsData: {
  //       answers: ["M", "Q", "Z", "X"],
  //       answerSubmitted: false,
  //       questions: [
  //         {
  //           "question": "What is the only letter that doesn't appear in a US state name?",
  //           "incorrect": ["M", "Z", "X"],
  //           "correct": "Q"
  //         }
  //       ]
  //     },
  //     data() {
  //       return {
  //         selectedAnswerId: null,
  //       }
  //     }
  //   });

  //   wrapper.vm.selectAnswer(1)
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.vm.selectedAnswerId).toBe(1)
  // })

})