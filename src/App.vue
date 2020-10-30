<template>
  <div id="app">
    <div class="container text-center">
      <Banner />
      <Question :questions="questions" />
      <AnswerContainer
        v-bind:answers="answers"
        v-bind:answerSubmitted="answerSubmitted"
        v-bind:questions="questions"
        v-on:toggleAnswered="toggleAnswered"
        v-on:addPoint="addPoint" />
      <NextButton
        v-bind:answerSubmitted="answerSubmitted"
        v-bind:questions="questions"
        v-on:nextQuestion="nextQuestion"
        v-on:resetElemClasses="resetElemClasses"
        v-on:resetGame="resetGame" />
      <Score :score="score" />
    </div>
  </div>
</template>

<script>
import json from "./assets/data/apprentice-tandem-for-400-data.json";
import Banner from "./components/Banner";
import Question from "./components/Question";
import AnswerContainer from "./components/AnswerContainer";
import NextButton from "./components/NextButton";
import Score from "./components/Score";
export default {
  name: "app",
  components: {
    Banner,
    Question,
    AnswerContainer,
    NextButton,
    Score,
  },
  data: function () {
    return {
      json: [],
      questions: [],
      answers: [],
      answerSubmitted: false,
      score: 0,
    };
  },
  created: function () {
    this.prepQuestions(json);
    this.json = json;
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
    toggleAnswered: function () {
      this.answerSubmitted = !this.answerSubmitted;
    },
    addPoint: function () {
      this.score++;
    },
    async nextQuestion() {
      // without async, keydown answers followed quickly enough by spacebar can trigger unpredictable toggling & subsequent key behavior
      await this.toggleAnswered();
      await this.resetElemClasses();
      await this.questions.shift();
      await this.shuffleAnswers(this.questions[0]);
    },
    resetElemClasses: function () {
      const answerButtons = document.getElementsByClassName("answer-button");
      answerButtons.forEach((button) => {
        button.classList.remove("active", "nay", "yay");
      });
      console.log(answerButtons);
      document.getElementById("thumbs-up").classList.remove("correct");
      document.getElementById("thumbs-down").classList.remove("incorrect");
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

<style>
@font-face {
  font-family: "bariolregular";
  src: url("./assets/fonts/bariol_regular-webfont.eot");
  src: url("./assets/fonts/bariol_regular-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/bariol_regular-webfont.woff2") format("woff2"),
    url("./assets/fonts/bariol_regular-webfont.woff") format("woff"),
    url("./assets/fonts/bariol_regular-webfont.ttf") format("truetype"),
    url("./assets/fonts/bariol_regular-webfont.svg#bariolregular") format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "bariolbold";
  src: url("./assets/fonts/bariol_bold-webfont.eot");
  src: url("./assets/fonts/bariol_bold-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/bariol_bold-webfont.woff2") format("woff2"),
    url("./assets/fonts/bariol_bold-webfont.woff") format("woff"),
    url("./assets/fonts/bariol_bold-webfont.ttf") format("truetype"),
    url("./assets/fonts/bariol_bold-webfont.svg#bariolbold") format("svg");
  font-weight: normal;
  font-style: normal;
}

*,
::before,
::after {
  box-sizing: border-box;
}

*:focus {
  outline: none !important;
}

body {
  font-family: "bariolregular";
  background-color: #f3f6f7;
  color: #464646;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.text-center {
  text-align: center !important;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
