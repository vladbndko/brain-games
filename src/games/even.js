import engine from '..';
import getRandomNum from '../utilities';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';

export const isEven = (num) => num % 2 === 0;

const generateEvenGame = () => {
  const question = getRandomNum(10, 200);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(gameRule, generateEvenGame);
