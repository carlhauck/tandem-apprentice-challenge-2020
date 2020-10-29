<template>
  <div id="app">
    <Trivia />
  </div>
</template>

<script>
import Trivia from "./components/Trivia";
export default {
  name: "app",
  components: {
    Trivia,
  },
  data: function () {
    return {};
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

.page-title {
  display: inline;
  font-family: "bariolbold";
  font-size: 2em;
  color: #6c6f45;
  margin: 0.4em 0.4em;
}

svg {
  width: 30px;
  height: 30px;
}

svg#thumbs-down {
  transform: scale(-1, 1);
  margin-top: 1.5em;
}

svg.correct g,
svg.correct path {
  fill: rgb(105, 214, 120);
}

svg.incorrect g,
svg.incorrect path {
  fill: rgb(209, 75, 75);
}

.question {
  font-family: "bariolbold";
  font-size: 1.2em;
  color: rgb(70, 59, 102);
  padding-bottom: 0.15em;
}

.answer-container {
  margin-top: 0.25em;
  margin-bottom: 0.75em;
  width: 100%;
}

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

.score {
  font-family: "bariolregular";
  font-size: 1.2em;
  color: rgb(136, 66, 0);
  padding: 0.25em;
}

@media (min-width: 350px) {
  .page-title {
    font-size: 2.5em;
  }
  .question {
    font-size: 1.4em;
    padding-bottom: 0.25em;
  }
  svg {
    width: 32px;
    height: 32px;
  }
  button.answer-button {
    padding: 1em;
    font-size: 1.1em;
  }
  button.next-button {
    font-size: 1.1em;
  }
  .score {
    font-size: 1.4em;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
  .page-title {
    display: inline;
    font-family: "bariolbold";
    font-size: 3.5em;
    color: #6c6f45;
    padding: 0 0.4em;
  }
  svg {
    width: 48px;
    height: 48px;
  }
  svg#thumbs-down {
    transform: scale(-1, 1);
    margin-top: 2em;
  }
  .question {
    font-family: "bariolbold";
    font-size: 1.6em;
    color: rgb(70, 59, 102);
  }
  .answer-container {
    width: 90%;
  }
  button.answer-button {
    font-size: 1.1em;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .answer-container {
    width: 70%;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .answer-container {
    width: 60%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  .answer-container {
    width: 50%;
  }
}
</style>
