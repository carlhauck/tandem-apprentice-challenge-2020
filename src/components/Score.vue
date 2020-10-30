<template>
  <p class="score">score: {{ score }}</p>
</template>

<script>
export default {
  props: ["score"],
};
</script>

<style>
.score {
  font-family: "bariolregular";
  font-size: 1.2em;
  color: rgb(136, 66, 0);
  padding: 0.25em;
}

@media (min-width: 350px) {
  .score {
    font-size: 1.4em;
  }
}
</style>