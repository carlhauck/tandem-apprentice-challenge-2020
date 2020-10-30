<template>
  <div class="flex-container">
      <div class="answer-container">
        <AnswerButton
          v-for="(answer, answerId) in answers"
          v-bind:answer="answer"
          v-bind:answers="answers"
          v-bind:answerSubmitted="answerSubmitted"
          v-bind:questions="questions"
          v-bind:correctAnswerId="correctAnswerId"
          v-bind:selectedAnswerId="selectedAnswerId"
          v-bind:answerId="answerId"
          v-bind:key="answerId"
          v-on:selectAnswer="selectAnswer" />
      </div>
    </div>
</template>

<script>
import AnswerButton from "./AnswerButton";
export default {
  components: {
    AnswerButton,
  },
  props: ["answers", "answerSubmitted", "questions"],
  data: function () {
    return {
      selectedAnswerId: null,
    };
  },
  computed: {
    correctAnswerId: function () {
      return this.answers.indexOf(this.questions[0]["correct"]);
    },
  },
  methods: {
    selectAnswer(selectedAnswerId) {
      this.selectedAnswerId = selectedAnswerId;
      this.$emit("toggleSubmitted");
      if (selectedAnswerId === this.correctAnswerId) {
        this.addScore();
        const thumbsUp = document.getElementById("thumbs-up");
        thumbsUp.classList.add("correct");
      } else {
        const thumbsDown = document.getElementById("thumbs-down");
        thumbsDown.classList.add("incorrect");
      }
    },
    addScore() {
      this.$emit("addPoint");
    },
  },
};
</script>

<style>
.answer-container {
  margin-top: 0.25em;
  margin-bottom: 0.75em;
  width: 100%;
}

@media (min-width: 576px) {
  .answer-container {
    width: 90%;
  }
}

@media (min-width: 768px) {
  .answer-container {
    width: 70%;
  }
}

@media (min-width: 992px) {
  .answer-container {
    width: 60%;
  }
}

@media (min-width: 1200px) {
  .answer-container {
    width: 50%;
  }
}
</style>