<template>
  <button class="answer-button"
    v-on:click="selectAnswer(answer)"
    v-bind:class="{ active: isActive, yay: selectedAnswerId === correctAnswerId && answerId === selectedAnswerId, nay: answered && answerId === correctAnswerId && correctAnswerId !== selectedAnswerId }">
      {{ answer }}
    </button>
</template>

<script>
const answerButtons = document.getElementsByClassName("answer-button");
export default {
  props: [
    "answer",
    "answers",
    "answered",
    "questions",
    "selectedAnswerId",
    "correctAnswerId",
    "answerId",
  ],
  data: function () {
    return {
      isActive: false,
    };
  },
  mounted: function () {
    window.addEventListener("keydown", this.onKeydown);
  },
  methods: {
    selectAnswer: function () {
      if (this.answered === false) {
        this.isActive = true;
        this.$emit("selectAnswer", this.answerId);
      }
    },
    onKeydown: function (e) {
      if (this.answered === false) {
        // a, b, c, d keys
        if (e.which === 65) {
          answerButtons[0].classList.add("active");
          this.$emit("selectAnswer", 0);
        } else if (e.which === 66) {
          answerButtons[1].classList.add("active");
          this.$emit("selectAnswer", 1);
        } else if (e.which === 67) {
          answerButtons[2].classList.add("active");
          this.$emit("selectAnswer", 2);
        } else if (e.which === 68) {
          answerButtons[3].classList.add("active");
          this.$emit("selectAnswer", 3);
        }
      }
    },
  },
};
</script>