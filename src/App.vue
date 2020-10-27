<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: "cassannet_plusregular";
  src: url("./assets/fonts/cassannet_plus_regular-webfont.eot");
  src: url("./assets/fonts/cassannet_plus_regular-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/cassannet_plus_regular-webfont.woff2") format("woff2"),
    url("./assets/fonts/cassannet_plus_regular-webfont.woff") format("woff"),
    url("./assets/fonts/cassannet_plus_regular-webfont.ttf") format("truetype"),
    url("./assets/fonts/cassannet_plus_regular-webfont.svg#cassannet_plusregular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "bariollight";
  src: url("./assets/fonts/bariol_light-webfont.eot");
  src: url("./assets/fonts/bariol_light-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/bariol_light-webfont.woff2") format("woff2"),
    url("./assets/fonts/bariol_light-webfont.woff") format("woff"),
    url("./assets/fonts/bariol_light-webfont.ttf") format("truetype"),
    url("./assets/fonts/bariol_light-webfont.svg#bariollight") format("svg");
  font-weight: normal;
  font-style: normal;
}

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
  font-family: "bariolthin";
  src: url("./assets/fonts/bariol_thin-webfont.eot");
  src: url("./assets/fonts/bariol_thin-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/bariol_thin-webfont.woff2") format("woff2"),
    url("./assets/fonts/bariol_thin-webfont.woff") format("woff"),
    url("./assets/fonts/bariol_thin-webfont.ttf") format("truetype"),
    url("./assets/fonts/bariol_thin-webfont.svg#bariolregular") format("svg");
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

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-center {
  text-align: center !important;
}

svg {
  width: 32px;
  height: 32px;
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

h1.page-title {
  margin: 0.45em 0;
}

.page-title {
  display: inline;
  font-family: "bariolbold";
  font-size: 2.2em;
  color: #6c6f45;
}

.question {
  font-family: "bariolbold";
  font-size: 1.4em;
  color: rgb(70, 59, 102);
  padding-bottom: 0.25em;
}

.score {
  font-family: "bariolregular";
  font-size: 1.4em;
  color: rgb(136, 66, 0);
}

.answer-container {
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  width: 100%;
}

button.answer-button {
  display: block;
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  font-family: "bariolregular";
  font-size: 1.1em;
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

button.next-button {
  display: block;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  font-family: "bariolbold";
  font-size: 1.1em;
  background-color: rgb(247, 244, 240);
  color: rgb(48, 98, 156);
  border-radius: 12px;
  border: 2px solid rgb(48, 98, 156);
}

button.next-button:hover {
  color: rgb(222, 230, 240);
  background-color: rgb(66, 115, 172);
  border-radius: 12px;
  border: 2px solid rgb(48, 98, 156);
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
  .question {
    font-family: "bariolbold";
    font-size: 1.6em;
    color: rgb(70, 59, 102);
  }
  .answer-container {
    width: 90%;
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
  button.answer-button {
    font-size: 1.1em;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .answer-container {
    width: 80%;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .answer-container {
    width: 70%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  .answer-container {
    width: 60%;
  }
}
</style>
