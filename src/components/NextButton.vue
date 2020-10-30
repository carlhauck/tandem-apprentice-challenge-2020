<template>
  <div class="flex-container">
    <button v-if="answerSubmitted === false && questions.length > 1" class="next-button disabled" @click="clickNext()">Next Question</button>
    <button v-else-if="answerSubmitted === true && questions.length > 1" class="next-button" @click="clickNext()">Next Question</button>
    <button v-else-if="answerSubmitted === false" class="next-button disabled">Again?</button>
    <button v-else class="next-button" @click="clickReset()">Again?</button>
  </div>
</template>

<script>
export default {
  props: ["answerSubmitted", "questions"],
  mounted: function () {
    window.addEventListener("keydown", this.onKeydown);
  },
  methods: {
    clickNext: function () {
      this.$emit("nextQuestion");
    },
    clickReset: function () {
      this.$emit("resetGame");
    },
    onKeydown: function (e) {
      if (this.answerSubmitted && e.which === 32) {
        // space bar
        if (this.questions.length > 1) {
          event.preventDefault(); // prevents spacebar from triggering another answer click
          this.$emit("nextQuestion");
        } else if (this.questions.length === 1) {
          event.preventDefault();
          this.$emit("resetGame");
        }
      }
    },
  },
};
</script>

<style>
button.next-button {
  display: block;
  padding: 0.5em 1em;
  margin-bottom: 0.25em;
  font-family: "bariolbold";
  font-size: 1em;
  background-color: rgb(247, 244, 240);
  color: rgb(48, 98, 156);
  border-radius: 12px;
  border: 2px solid rgb(48, 98, 156);
}

button.next-button.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  z-index: -1;
}

button.next-button:hover {
  color: rgb(222, 230, 240);
  background-color: rgb(66, 115, 172);
  border-radius: 12px;
  border: 2px solid rgb(48, 98, 156);
}

@media (min-width: 350px) {
  button.next-button {
    font-size: 1.1em;
  }
}
</style>