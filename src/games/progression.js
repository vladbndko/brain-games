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
  console.log('What number is missing in the progression?');
  printGreet();
  let count = 0;
  const game = () => {
    if (count === gameCount) {
      printCongratulations();
      return;
    }
    const generateNumber = (start, step, length) => {
      const iter = (num, len, acc) => {
        if (len === 0) {
          return acc;
        }
        const newAcc = [...acc, num];
        return iter(num + step, len - 1, newAcc);
      };
      return iter(start, length, []);
    };
    const arr = generateNumber(5, 2, 10);
    const correctAnswer = arr[Math.floor(Math.random() * 10)];
    const questionArr = arr.slice().join(' ').replace(correctAnswer, '..');
    printQuestion(questionArr);
    const answer = readlineSync.question('Your answer: ');
    if (+answer === +correctAnswer) {
      count += 1;
      printCorrect();
      game();
    } else {
      printWrong(answer, correctAnswer);
    }
  };
  game();
};
