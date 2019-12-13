import engine from '..';
import { getRandomNum, isPrime } from '../utilities';

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
