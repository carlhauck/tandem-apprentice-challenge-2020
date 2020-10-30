<template>
  <button class="answer-button"
    v-on:click="selectAnswer(answer)"
    v-bind:class="{ 
      active: answerSubmitted && isActive && answerId === selectedAnswerId,
      yay: answerSubmitted && selectedAnswerId === correctAnswerId && answerId === selectedAnswerId,
      nay: answerSubmitted && answerId === correctAnswerId && correctAnswerId !== selectedAnswerId }">
        {{ answer }}
    </button>
</template>

<script>
const answerButtons = document.getElementsByClassName("answer-button");
export default {
  props: [
    "answer",
    "answers",
    "answerSubmitted",
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
      if (this.answerSubmitted === false) {
        this.isActive = true;
        this.$emit("selectAnswer", this.answerId);
      }
    },
    onKeydown: function (e) {
      if (this.answerSubmitted === false) {
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

<style>
button.answer-button {
  display: block;
  width: 100%;
  padding: 0.75em;
  margin-bottom: 0.75em;
  font-family: "bariolregular";
  font-size: 1em;
  background-color: rgb(70, 59, 102);
  color: rgb(241, 239, 245);
  border-radius: 12px;
  border: 2px solid rgb(70, 59, 102);
}

button.answer-button:hover {
  background-color: rgb(109, 96, 143);
  color: white;
}

button.answer-button.active {
  background-color: rgb(109, 96, 143);
  color: white;
}

button.answer-button.yay {
  background-color: rgb(134, 151, 72);
  color: white;
  border: 2px solid rgb(70, 59, 102);
}

button.answer-button.nay {
  background-color: rgb(150, 77, 77);
  color: white;
  border: 2px solid rgb(70, 59, 102);
  animation: shake 0.8s;
  animation-iteration-count: 2;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

@media (min-width: 350px) {
  button.answer-button {
    padding: 1em;
    font-size: 1.1em;
  }
}

@media (min-width: 576px) {
  button.answer-button {
    font-size: 1.1em;
  }
}
</style>