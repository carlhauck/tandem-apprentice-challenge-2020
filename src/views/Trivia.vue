<template>
  <div class="trivia">
    <div class="container text-center">
      <div class="flex-container">
        <!-- thumbs down -->
        <svg id="thumbs-down" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>thumb-down</title><g fill="#dddddd"><rect x="1" y="4" width="8" height="24" rx="3" ry="3"></rect> <path d="M47,19a4.988,4.988,0,0,0-2.33-4.209A4.981,4.981,0,0,0,42.6,8.747,3.964,3.964,0,0,0,43,7a4,4,0,0,0-4-4H23A29.993,29.993,0,0,0,11,5.387V26l6.056,20.329A1,1,0,0,0,18,47c2.075,0,6-1.463,6-7V30H41a5.006,5.006,0,0,0,5-5,4.938,4.938,0,0,0-.6-2.348A4.93,4.93,0,0,0,47,19Z" fill="#dddddd"></path></g></svg>
        <h1 class="page-title">tandem trivia</h1>
        <!-- thumbs up -->
        <svg id="thumbs-up" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>thumb-up</title><g fill="#dddddd"><rect x="1" y="20" width="8" height="24" rx="3" ry="3"></rect> <path d="M47,29a4.926,4.926,0,0,0-1.6-3.652A4.926,4.926,0,0,0,46,23a5.006,5.006,0,0,0-5-5H24V8c0-5.537-3.925-7-6-7a1,1,0,0,0-.944.671L11,22V42.613A29.993,29.993,0,0,0,23,45H39a4,4,0,0,0,4-4,3.96,3.96,0,0,0-.4-1.747,4.976,4.976,0,0,0,2.071-6.043A4.989,4.989,0,0,0,47,29Z" fill="#dddddd"></path></g></svg>
      </div>
      <h2 class="question"> {{ 11 - questions.length }}. {{ questions[0]["question"] }} </h2>
      <div class="flex-container">
        <div class="answer-container">
          <button id="answer-a" class="answer-button" @click="guessA()">(a) {{ answers[0] }} </button>
          <button id="answer-b" class="answer-button" @click="guessB()">(b) {{ answers[1] }} </button>
          <button id="answer-c" class="answer-button" @click="guessC()">(c) {{ answers[2] }} </button>
          <button id="answer-d" class="answer-button" @click="guessD()">(d) {{ answers[3] }} </button>
        </div>
      </div>
      <div class="flex-container">
        <button v-if="answered === false && questions.length > 1" class="next-button disabled" @click="nextQuestion()">Next Question</button>
        <button v-else-if="answered === true && questions.length > 1" class="next-button" @click="nextQuestion()">Next Question</button>
        <button v-else-if="answered === false" class="next-button disabled" @click="shuffleQuestions(json)">Again?</button>
        <button v-else class="next-button" @click="resetGame()">Again?</button>
      </div>
      <p class="score">score: {{ score }}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import json from "./../assets/data/apprentice-tandem-for-400-data.json";
export default {
  data: function () {
    return {
      json: [],
      questions: [],
      answers: [],
      answered: false,
      score: 0,
    };
  },
  created: function () {
    this.shuffleQuestions(json);
    this.json = json;
  },
  mounted: function () {
    window.addEventListener("keydown", this.keyAnswer);
  },
  methods: {
    shuffleQuestions: function (questionsArray) {
      // shuffles questions and cuts down to 10
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

      this.answers = answers;
    },
    async nextQuestion() {
      // without async, key answers immediately followed by space bar can trigger unpredictable toggling and subsequent key behavior
      await this.resetElements();
      await this.questions.shift();
      await this.shuffleAnswers(this.questions[0]);
      await this.toggleAnswered();
    },
    resetElements: function () {
      const answerButtons = document.getElementsByClassName("answer-button");
      answerButtons.forEach((button) => {
        button.classList.remove("active", "nay", "yay");
      });
      document.getElementById("thumbs-up").classList.remove("correct");
      document.getElementById("thumbs-down").classList.remove("incorrect");
    },
    toggleAnswered: function () {
      this.answered = !this.answered;
    },
    guessA: function () {
      if (this.answered == false) {
        document.getElementById("answer-a").classList.add("active");
        if (this.answers[0] === this.questions[0]["correct"]) {
          this.correctAnswer(0);
        } else {
          this.incorrectAnswer();
        }
      }
    },
    guessB: function () {
      if (this.answered == false) {
        document.getElementById("answer-b").classList.add("active");
        if (this.answers[1] === this.questions[0]["correct"]) {
          this.correctAnswer(1);
        } else {
          this.incorrectAnswer();
        }
      }
    },
    guessC: function () {
      if (this.answered == false) {
        document.getElementById("answer-c").classList.add("active");
        if (this.answers[2] === this.questions[0]["correct"]) {
          this.correctAnswer(2);
        } else {
          this.incorrectAnswer();
        }
      }
    },
    guessD: function () {
      if (this.answered == false) {
        document.getElementById("answer-d").classList.add("active");
        if (this.answers[3] === this.questions[0]["correct"]) {
          this.correctAnswer(3);
        } else {
          this.incorrectAnswer();
        }
      }
    },
    keyAnswer: function (e) {
      if (this.answered === false) {
        // a, b, c, d keys
        if (e.which === 65) {
          this.guessA();
        } else if (e.which === 66) {
          this.guessB();
        } else if (e.which === 67) {
          this.guessC();
        } else if (e.which === 68) {
          this.guessD();
        }
      } else if (this.answered === true) {
        // space bar
        if (e.which === 32 && this.questions.length > 1) {
          this.nextQuestion();
        } else if (e.which === 32 && this.questions.length === 1) {
          this.resetGame();
        }
      }
    },
    correctAnswer: function (indexCorrect) {
      const thumbsUp = document.getElementById("thumbs-up");
      thumbsUp.classList.add("correct");
      this.toggleAnswered();
      this.score++;
      if (indexCorrect === 0) {
        document.getElementById("answer-a").classList.add("yay");
      } else if (indexCorrect === 1) {
        document.getElementById("answer-b").classList.add("yay");
      } else if (indexCorrect === 2) {
        document.getElementById("answer-c").classList.add("yay");
      } else if (indexCorrect === 3) {
        document.getElementById("answer-d").classList.add("yay");
      }
    },
    incorrectAnswer: function () {
      const thumbsDown = document.getElementById("thumbs-down");
      thumbsDown.classList.add("incorrect");
      this.toggleAnswered();
      let indexCorrect = this.answers.indexOf(this.questions[0]["correct"]);
      if (indexCorrect === 0) {
        document.getElementById("answer-a").classList.add("nay");
      } else if (indexCorrect === 1) {
        document.getElementById("answer-b").classList.add("nay");
      } else if (indexCorrect === 2) {
        document.getElementById("answer-c").classList.add("nay");
      } else if (indexCorrect === 3) {
        document.getElementById("answer-d").classList.add("nay");
      }
    },
    resetGame: function () {
      this.score = 0;
      this.resetElements();
      this.toggleAnswered();
      this.shuffleQuestions(this.json);
    },
  },
};
</script>