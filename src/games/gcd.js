import engine from '..';
import getRandomNum from '../utilities';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const bigest = num1 > num2 ? num1 : num2;
  const iter = (num) => {
    if (num1 % num === 0 && num2 % num === 0) {
      return num;
    }
    return iter(num - 1);
  };
  return iter(bigest);
};

const gcd = () => {
  const number1 = getRandomNum(10, 100);
  const number2 = getRandomNum(10, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${getGcd(number1, number2)}`;
  return [question, correctAnswer];
};

export default () => engine(gameRule, gcd);
