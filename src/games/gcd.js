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
  console.log('Find the greatest common divisor of given numbers.');
  printGreet();
  let count = 0;
  const game = () => {
    if (count === gameCount) {
      printCongratulations();
      return;
    }
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    printQuestion(`${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const bigest = number1 > number2 ? number1 : number2;

    const getGcd = () => {
      const iter = (num) => {
        if (number1 % num === 0 && number2 % num === 0) {
          return num;
        }
        return iter(num - 1);
      };
      return iter(bigest);
    };
    const correctAnswer = getGcd();
    if (+answer === correctAnswer) {
      count += 1;
      printCorrect();
      game();
    } else {
      printWrong(answer, correctAnswer);
    }
  };
  game();
};
