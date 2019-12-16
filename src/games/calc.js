import engine from '..';
import getRandomNum from '../utilities';

const getRandomExpression = () => {
  const actions = ['*', '-', '+'];
  const getRandomAction = () => actions[Math.floor(Math.random() * actions.length)];
  const action = getRandomAction();
  const number1 = getRandomNum();
  const number2 = getRandomNum();
  return [number1, action, number2];
};

const сalculate = (exp) => {
  const [number1, action, number2] = exp;
  let result = 0;
  switch (action) {
    case '*':
      result = number1 * number2;
      break;
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    default:
      break;
  }
  return result;
};

export default () => {
  const calc = () => {
    const question = getRandomExpression().join(' ');
    const correctAnswer = `${сalculate(question)}`;
    return [question, correctAnswer];
  };
  engine(
    'What is the result of the expression?',
    calc,
  );
};
