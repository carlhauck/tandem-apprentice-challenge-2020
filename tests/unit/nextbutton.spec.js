import { mount } from "@vue/test-utils"
import NextButton from './../../src/components/NextButton.vue'

describe("NextButton.vue", () => {

  test("sanity test", () => {
    console.log(NextButton)
  })

  test("renders disabled next button when answer isn't yet submitted and questions array length > 1", () => {
    const wrapper = mount(NextButton, {
      propsData: {
        answerSubmitted: false,
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
          },
        ]
      },
    })
    const button = wrapper.find('button')
    expect(wrapper.html()).toContain('next-button')
    expect(button.classes()).toContain('next-button')
    expect(button.classes()).toContain('disabled')
  })

  test("renders enabled next button when answer is submitted and questions array length > 1", () => {
    const wrapper = mount(NextButton, {
      propsData: {
        answerSubmitted: true,
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
          },
        ]
      },
    })
    const button = wrapper.find('button')
    expect(wrapper.html()).toContain('next-button')
    expect(button.classes()).toContain('next-button')
    expect(button.classes()).not.toContain('disabled')
  })

  test("renders disabled 'again?' button when answer isn't yet submitted and questions array length = 1", () => {
    const wrapper = mount(NextButton, {
      propsData: {
        answerSubmitted: false,
        questions: [
          {
            "question": "What is the only letter that doesn't appear in a US state name?",
            "incorrect": ["M", "Z", "X"],
            "correct": "Q"
          }
        ]
      },
    })
    const button = wrapper.find('button')
    expect(wrapper.text()).toContain('Again?')
    expect(button.classes()).toContain('next-button')
    expect(button.classes()).toContain('disabled')
  })

  test("renders enabled 'again?' button when answer is submitted and questions array length = 1", () => {
    const wrapper = mount(NextButton, {
      propsData: {
        answerSubmitted: true,
        questions: [
          {
            "question": "What is the only letter that doesn't appear in a US state name?",
            "incorrect": ["M", "Z", "X"],
            "correct": "Q"
          }
        ]
      },
    })
    const button = wrapper.find('button')
    expect(wrapper.text()).toContain('Again?')
    expect(button.classes()).toContain('next-button')
    expect(button.classes()).not.toContain('disabled')
  })

})