<template>
  <div class="trivia">
    <h2> {{ questions[0]["question"] }} </h2>
    <p id="answer-a">a) {{ answer_a }} </p>
    <p id="answer-b">b) {{ answer_b }} </p>
    <p id="answer-c">c) {{ answer_c }} </p>
    <p id="answer-d">d) {{ answer_d }} </p>
    <button @click="nextQuestion()">Next Question</button>
    <p> {{ questions[0] }} </p>
  </div>
</template>

<style>
</style>

<script>
// import axios from "axios";
import json from "./../assets/data/apprentice-tandem-for-400-data.json";
export default {
  data: function () {
    return {
      questions: [],
      answer_a: "",
      answer_b: "",
      answer_c: "",
      answer_d: "",
    };
  },
  created: function () {
    this.shuffleQuestions(json);
  },
  mounted: function () {
    window.addEventListener("keydown", this.keyAnswer);
  },
  methods: {
    // shuffles & then limits to 10 questions
    shuffleQuestions: function (questionsArray) {
      const questionsCopy = questionsArray.slice();
      let currentIndex = questionsCopy.length;
      let temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = questionsCopy[currentIndex];
        questionsCopy[currentIndex] = questionsCopy[randomIndex];
        questionsCopy[randomIndex] = temporaryValue;
      }

      this.questions = questionsCopy.slice(0, 10);
      this.shuffleAnswers(questionsCopy[0]);
    },
    // removes first question from array
    nextQuestion: function () {
      this.questions.shift();
      this.shuffleAnswers(this.questions[0]);
    },
    shuffleAnswers: function (questionObject) {
      const answers = [
        questionObject["correct"],
        ...questionObject["incorrect"],
      ];

      let currentIndex = answers.length;
      let temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = answers[currentIndex];
        answers[currentIndex] = answers[randomIndex];
        answers[randomIndex] = temporaryValue;
      }

      [this.answer_a, this.answer_b, this.answer_c, this.answer_d] = [
        answers[0],
        answers[1],
        answers[2],
        answers[3],
      ];
    },
    keyAnswer: function (e) {
      if (e.which === 65) {
        // a
        if (this.answer_a === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      } else if (e.which === 66) {
        // b
        if (this.answer_b === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      } else if (e.which === 67) {
        // c
        if (this.answer_c === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      } else if (e.which === 68) {
        // d
        if (this.answer_d === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      }
    },
  },
};
</script>