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
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  printGreet();
  let count = 0;
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  const game = () => {
    if (count === gameCount) {
      printCongratulations();
      return;
    }
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    printQuestion(number);
    const answer = readlineSync.question('Your answer: ');
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
