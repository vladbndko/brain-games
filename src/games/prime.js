import engine from '..';
import getRandomNum from '../utilities';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeGame = () => {
  const question = getRandomNum(50, 250);
  const correntAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correntAnswer];
};

export default () => engine(gameRule, generatePrimeGame);
