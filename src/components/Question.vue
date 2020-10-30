<template>
  <h2 class="question"> {{ 11 - questions.length }}. {{ questions[0]["question"] }} </h2>
</template>

<script>
export default {
  props: ["questions"],
};
</script>

<style>
.question {
  font-family: "bariolbold";
  font-size: 1.2em;
  color: rgb(70, 59, 102);
  padding-bottom: 0.15em;
}

@media (min-width: 350px) {
  .question {
    font-size: 1.4em;
    padding-bottom: 0.25em;
  }
}

@media (min-width: 576px) {
  .question {
    font-family: "bariolbold";
    font-size: 1.6em;
    color: rgb(70, 59, 102);
  }
}
</style>