import { mount } from "@vue/test-utils"
import Question from './../../src/components/Question.vue'

describe("Question.vue", () => {

  test("sanity test", () => {
    console.log(Question)
  })

  test("renders question & appropriate question number based on questions remaining in array", () => {
    const wrapper = mount(Question, {
      propsData: {
        questions: [
          {
            "question": "What is the only letter that doesn't appear in a US state name?",
            "incorrect": ["M", "Z", "X"],
            "correct": "Q"
          },
          {
            "question": "What is the name for a cow-bison hybrid?",
            "incorrect": ["Cowson", "Bicow", "Mooson"],
            "correct": "Beefalo"
          }
        ]
      },
    })
    expect(wrapper.html()).toContain('question')
    expect(wrapper.html()).toContain(9)
  })

})