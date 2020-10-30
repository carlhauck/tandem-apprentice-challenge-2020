<template>
  <div class="flex-container">
    <!-- thumbs down -->
    <svg id="thumbs-down" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>thumb-down</title><g fill="#dddddd"><rect x="1" y="4" width="8" height="24" rx="3" ry="3"></rect> <path d="M47,19a4.988,4.988,0,0,0-2.33-4.209A4.981,4.981,0,0,0,42.6,8.747,3.964,3.964,0,0,0,43,7a4,4,0,0,0-4-4H23A29.993,29.993,0,0,0,11,5.387V26l6.056,20.329A1,1,0,0,0,18,47c2.075,0,6-1.463,6-7V30H41a5.006,5.006,0,0,0,5-5,4.938,4.938,0,0,0-.6-2.348A4.93,4.93,0,0,0,47,19Z" fill="#dddddd"></path></g></svg>
    <!-- title -->
    <h1 class="page-title">tandem trivia</h1>
    <!-- thumbs up -->
    <svg id="thumbs-up" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>thumb-up</title><g fill="#dddddd"><rect x="1" y="20" width="8" height="24" rx="3" ry="3"></rect> <path d="M47,29a4.926,4.926,0,0,0-1.6-3.652A4.926,4.926,0,0,0,46,23a5.006,5.006,0,0,0-5-5H24V8c0-5.537-3.925-7-6-7a1,1,0,0,0-.944.671L11,22V42.613A29.993,29.993,0,0,0,23,45H39a4,4,0,0,0,4-4,3.96,3.96,0,0,0-.4-1.747,4.976,4.976,0,0,0,2.071-6.043A4.989,4.989,0,0,0,47,29Z" fill="#dddddd"></path></g></svg>
  </div>
</template>

<style>
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

@media (min-width: 350px) {
  .page-title {
    font-size: 2.5em;
  }
  svg {
    width: 32px;
    height: 32px;
  }
}

@media (min-width: 576px) {
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
}
</style>