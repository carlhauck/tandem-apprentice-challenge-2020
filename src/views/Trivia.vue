<template>
  <div class="trivia">
    <h2> {{ questions[0]["question"] }} </h2>
    <button class="answer-button" v-on:click="mouseAnswer('a')">a) {{ answers[0] }} </button>
    <button class="answer-button" v-on:click="mouseAnswer('b')">b) {{ answers[1] }} </button>
    <button class="answer-button" v-on:click="mouseAnswer('c')">c) {{ answers[2] }} </button>
    <button class="answer-button" v-on:click="mouseAnswer('d')">d) {{ answers[3] }} </button>
    <button @click="nextQuestion()">Next Question</button>
    <p> {{ questions[0] }} </p>
  </div>
</template>

<style>
.answer-button {
  display: block;
}
</style>

<script>
import json from "./../assets/data/apprentice-tandem-for-400-data.json";
export default {
  data: function () {
    return {
      questions: [],
      answers: [],
    };
  },
  created: function () {
    this.shuffleQuestions(json);
  },
  mounted: function () {
    window.addEventListener("keydown", this.keyAnswer);
    // const answer_a = this.refs.answer_a;
    // const answer_b = this.refs.answer_b;
    // const answer_c = this.refs.answer_c;
    // const answer_d = this.refs.answer_d;
    // answer_a.addEventListener("click", this.mouseAnswer("a"));
    // answer_b.addEventListener("click", this.mouseAnswer("b"));
    // answer_c.addEventListener("click", this.mouseAnswer("c"));
    // answer_d.addEventListener("click", this.mouseAnswer("d"));
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

      // [this.answer_a, this.answer_b, this.answer_c, this.answer_d] = [
      //   answers[0],
      //   answers[1],
      //   answers[2],
      //   answers[3],
      // ];
      this.answers = answers;
    },
    keyAnswer: function (e) {
      if (e.which === 65) {
        // a
        if (this.answers[0] === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      } else if (e.which === 66) {
        // b
        if (this.answers[1] === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      } else if (e.which === 67) {
        // c
        if (this.answers[2] === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      } else if (e.which === 68) {
        // d
        if (this.answers[3] === this.questions[0]["correct"]) {
          console.log("Correct");
        } else {
          console.log("Incorrect");
        }
      }
    },
    mouseAnswer: function (letter) {
      console.log(letter);
      // if (e.which === 65) {
      //   // a
      //   if (this.answer_a === this.questions[0]["correct"]) {
      //     console.log("Correct");
      //   } else {
      //     console.log("Incorrect");
      //   }
      // } else if (e.which === 66) {
      //   // b
      //   if (this.answer_b === this.questions[0]["correct"]) {
      //     console.log("Correct");
      //   } else {
      //     console.log("Incorrect");
      //   }
      // } else if (e.which === 67) {
      //   // c
      //   if (this.answer_c === this.questions[0]["correct"]) {
      //     console.log("Correct");
      //   } else {
      //     console.log("Incorrect");
      //   }
      // } else if (e.which === 68) {
      //   // d
      //   if (this.answer_d === this.questions[0]["correct"]) {
      //     console.log("Correct");
      //   } else {
      //     console.log("Incorrect");
      //   }
      // }
    },
  },
};
</script>