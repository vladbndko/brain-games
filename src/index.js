import readlineSync from 'readline-sync';

let name;

export const gameCount = 3;

export const printWellcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const printGreet = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const printCorrect = () => {
  console.log('Correct!');
};

export const printCongratulations = () => {
  console.log(`Congratulations, ${name}!`);
};

export const printQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const printWrong = (correctAnswer, incorectAnswer) => {
  console.log(`"${correctAnswer}" is wrong answer ;(. Correct answer was "${incorectAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};
