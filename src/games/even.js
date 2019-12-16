import engine from '..';
import { getRandomNum } from '../utilities';

export const isEven = (num) => num % 2 === 0;

export default () => {
  const even = () => {
    const number = getRandomNum();
    return [number, isEven(number) ? 'yes' : 'no'];
  };
  engine(
    'Answer "yes" if the number is even, otherwise answer "no"',
    even,
  );
};
