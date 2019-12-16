import engine from '..';
import { getRandomNum } from '../utilities';

export const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export default () => {
  const prime = () => {
    const number = getRandomNum();
    return [number, isPrime(number) ? 'yes' : 'no'];
  };
  engine(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    prime,
  );
};
