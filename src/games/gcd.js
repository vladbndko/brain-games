import engine from '..';
import getRandomNum from '../utilities';

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

export default () => {
  const gcd = () => {
    const number1 = getRandomNum();
    const number2 = getRandomNum();
    const question = `${number1} ${number2}`;
    const correctAnswer = `${getGcd(number1, number2)}`;
    return [question, correctAnswer];
  };
  engine(
    'Find the greatest common divisor of given numbers.',
    gcd,
  );
};
