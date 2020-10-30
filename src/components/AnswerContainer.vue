<template>
  <div class="flex-container">
      <div class="answer-container">
        <AnswerButton
          v-for="(answer, answerId) in answers"
          v-bind:answer="answer"
          v-bind:answers="answers"
          v-bind:answered="answered"
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
  props: ["answers", "answered", "questions"],
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
      this.$emit("toggleAnswered");
      if (selectedAnswerId === this.correctAnswerId) {
        this.addScore();
      }
    },
    addScore() {
      this.$emit("addPoint");
    },
  },
};
</script>