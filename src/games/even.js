import engine from '..';
import { getRandomNum, isEven } from '../utilities';

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
