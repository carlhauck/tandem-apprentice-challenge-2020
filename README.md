# tandem-apprentice-challenge-2020

## Project setup
```
npm install
```

### Dependencies
* core-js 3.6.5
* Vue.js 2.6.11
* Vue Router 3.4.8

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run unit tests
```
npm run test:unit
```

### Using the trivia app
* To answer a question: Click one of the answer options, or type 'a', 'b', 'c', or 'd' on your keyboard.
* To advance to the next question: Click the 'Next Question' button or use the space bar on your keyboard (only available after you've answered the question currently on screen).
* To play another round: After a 10-question round is over, simply click the 'Again?' button or use the space bar.

### Known issues/challenges
This was my first time attempting to use Jest, so I admittedly eschewed TDD tenets in favor of something like Development-Driven Testing. (I'm more familiar with Ruby and RSpec, and backend unit testing is also more intuitive to me.) In poring over the Jest documentation, I realized that I have a good deal to learn about components and props before I can take full advantage of Jest within a framework like Vue. As a result, I don't have much faith in the code coverage of my unit tests here, but I'm looking forward to learning more about Jest and unit testing best practices in general.

### Feature wish list
It would've been fun to include a countdown timer for each question. I also considered adding sound effects for right/wrong answers, but decided that it'd probably just be annoying :)
Most importantly, though, because the stated goal of the app was to help people "improve their trivia skills," it would've been nice to find ways to make it feel more training-like rather than quiz-like. Perhaps that'd mean adding a database to track a user's scores over time, or providing question-specific study tips (e.g., mnemonic devices) for questions the user repeatedly gets wrong.

## From the apprenticeship application

### Prompt: Tandem for 400!
At Tandem, we love to learn and have fun and what better way to do that than to play a round of trivia. One of our favorite ways to wait while our test suite is running is to hop over to the #games channel on Slack and play a quick round of trivia. Playing trivia isn’t just a fun way to learn something new but also a great way to take a little break from a normal work task.
While we’re all knowledgeable in our own right, only one person can be crowned trivia champion with the highest score. Your goal is to create an application that others will be able to use in order to help improve their trivia skills.
Train to improve your trivia knowledge by creating your own trivia training app!

### Goal
Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.
Use creative license in terms of how you want us to see this game. At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with.
We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome.

### Assumptions
* A round of trivia has 10 Questions
* All questions are multiple-choice questions
* Your score does not need to update in real time
* Results can update on form submit, button click, or any interaction you choose
* We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

### Acceptance criteria
* A user can view questions.
* Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
* A user can select only 1 answer out of the 4 possible answers.
* The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round