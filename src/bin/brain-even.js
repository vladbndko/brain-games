#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no"');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);


const brainEven = () => {
  let gameCount = 0;
  const game = () => {
    if (gameCount === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      gameCount += 1;
      console.log('Correct!');
      game();
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  game();
};

export default brainEven;

brainEven();
