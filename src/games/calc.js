import engine from '..';
import getRandomNum from '../utilities';

const gameRule = 'What is the result of the expression?';

const actions = ['*', '-', '+'];

const getRandomExpression = () => {
  const action = actions[getRandomNum(0, actions.length)];
  const number1 = getRandomNum(5, 16);
  const number2 = getRandomNum(5, 16);
  return [number1, action, number2];
};

const calculate = (exp) => {
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

const generateCalcGame = () => {
  const expression = getRandomExpression();
  const question = expression.join(' ');
  const correctAnswer = calculate(expression).toString();
  return [question, correctAnswer];
};

export default () => engine(gameRule, generateCalcGame);
