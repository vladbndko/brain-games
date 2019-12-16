import engine from '..';

const gameRule = 'What number is missing in the progression?';

const generateNumber = (start, step, length) => {
  const iter = (num, len, acc) => {
    if (len === 0) {
      return acc;
    }
    const newAcc = [...acc, num];
    return iter(num + step, len - 1, newAcc);
  };
  return iter(start, length, []);
};

const progression = () => {
  const numbers = generateNumber(5, 2, 10);
  const target = numbers[Math.floor(Math.random() * 10)];
  const question = numbers.slice().join(' ').replace(target, '..');
  const correctAnswer = `${target}`;
  return [question, correctAnswer];
};

export default () => engine(gameRule, progression);
