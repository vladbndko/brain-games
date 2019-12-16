import engine from '..';
import getRandomNum from '../utilities';

export const isEven = (num) => num % 2 === 0;

export default () => {
  const even = () => {
    const question = getRandomNum();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  engine(
    'Answer "yes" if the number is even, otherwise answer "no"',
    even,
  );
};
