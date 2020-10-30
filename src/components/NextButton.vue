<template>
  <div class="flex-container">
    <button v-if="answered === false && questions.length > 1" class="next-button disabled" @click="clickNext()">Next Question</button>
    <button v-else-if="answered === true && questions.length > 1" class="next-button" @click="clickNext()">Next Question</button>
    <button v-else-if="answered === false" class="next-button disabled">Again?</button>
    <button v-else class="next-button" @click="clickReset()">Again?</button>
  </div>
</template>

<script>
export default {
  props: ["answered", "questions"],
  mounted: function () {
    window.addEventListener("keydown", this.onKeydown);
  },
  methods: {
    // onClick: function () {
    //   if (this.questions.length > 1) {
    //     this.$emit("nextQuestion");
    //   } else if (this.questions.length === 1) {
    //     this.$emit("resetGame");
    //   }
    // },
    clickNext: function () {
      this.$emit("nextQuestion");
      this.$emit("resetElemClasses");
    },
    clickReset: function () {
      this.$emit("resetGame");
    },
    onKeydown: function (e) {
      if (this.answered === true) {
        // space bar
        if (e.which === 32 && this.questions.length > 1) {
          event.preventDefault(); // prevents spacebar from triggering another answer click
          this.$emit("nextQuestion");
        } else if (e.which === 32 && this.questions.length === 1) {
          event.preventDefault();
          this.$emit("resetGame");
        }
      }
    },
  },
};
</script>