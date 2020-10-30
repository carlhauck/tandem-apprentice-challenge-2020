<template>
  <h2 class="question"> {{ 11 - questions.length }}. {{ questions[0]["question"] }} </h2>
</template>

<script>
export default {
  props: ["questions"],
};
</script>