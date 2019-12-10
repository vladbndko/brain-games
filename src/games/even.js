import readlineSync from 'readline-sync';

import {
  printWellcome,
  printGreet,
  printCorrect,
  printCongratulations,
  printWrong,
  printQuestion,
  gameCount,
} from '..';

export default () => {
  printWellcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  printGreet();
  let count = 0;
  const game = () => {
    if (count === gameCount) {
      printCongratulations();
      return;
    }
    const number = Math.floor(Math.random() * 100);
    printQuestion(number);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      count += 1;
      printCorrect();
      game();
    } else {
      printWrong(answer, correctAnswer);
    }
  };
  game();
};
