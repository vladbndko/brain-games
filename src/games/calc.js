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
  console.log('What is the result of the expression?');
  printGreet();
  let count = 0;
  const actions = ['*', '-', '+'];
  const game = () => {
    if (count === gameCount) {
      printCongratulations();
      return;
    }
    const getRandomNumber = () => Math.floor(Math.random() * 100);
    const getRandomAction = () => actions[Math.floor(Math.random() * actions.length)];

    const action = getRandomAction();
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    printQuestion(`${number1} ${action} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const getCorrectAnswer = (act, num1, num2) => {
      let correct = 0;
      switch (act) {
        case '*':
          correct = num1 * num2;
          break;
        case '+':
          correct = num1 + num2;
          break;
        case '-':
          correct = num1 - num2;
          break;
        default:
          break;
      }
      return correct;
    };
    const correctAnswer = getCorrectAnswer(action, number1, number2);
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
