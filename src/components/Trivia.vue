<template>
  <div class="trivia">
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
      <button v-else-if="answered === false" class="next-button disabled" @click="prepQuestions(json)">Again?</button>
      <button v-else class="next-button" @click="resetGame()">Again?</button>
    </div>
    <p class="score">score: {{ score }}</p>
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
    this.prepQuestions(json);
    this.json = json;
  },
  mounted: function () {
    window.addEventListener("keydown", this.onKeydown);
  },
  methods: {
    prepQuestions: function (questionsArray) {
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
      await this.resetElemClasses();
      await this.questions.shift();
      await this.shuffleAnswers(this.questions[0]);
      await this.toggleAnswered();
    },
    resetElemClasses: function () {
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
    onKeydown: function (e) {
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
          event.preventDefault(); // prevents spacebar from triggering another answer click
          this.nextQuestion();
        } else if (e.which === 32 && this.questions.length === 1) {
          event.preventDefault();
          this.resetGame();
        }
      }
    },
    correctAnswer: function (indexCorrect) {
      this.toggleAnswered();
      const thumbsUp = document.getElementById("thumbs-up");
      thumbsUp.classList.add("correct");
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
      this.toggleAnswered();
      const thumbsDown = document.getElementById("thumbs-down");
      thumbsDown.classList.add("incorrect");
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
      this.resetElemClasses();
      this.toggleAnswered();
      this.prepQuestions(this.json);
    },
  },
};
</script>