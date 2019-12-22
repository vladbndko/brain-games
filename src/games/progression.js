import engine from '..';

const gameRule = 'What number is missing in the progression?';

const generateProgressionNumbers = (start, step, length) => {
  const iter = (num, len, acc) => {
    if (len === 0) {
      return acc;
    }
    const newAcc = [...acc, num];
    return iter(num + step, len - 1, newAcc);
  };
  return iter(start, length, []);
};

const progressionFrom = 7;
const progressionStep = 3;
const progressionTo = 30;

const generateProgressionGame = () => {
  const numbers = generateProgressionNumbers(
    progressionFrom,
    progressionStep,
    progressionTo,
  );
  const target = numbers[Math.floor(Math.random() * numbers.length)];
  const question = numbers.slice().join(' ').replace(target, '..');
  const correctAnswer = target.toString();
  return [question, correctAnswer];
};

export default () => engine(gameRule, generateProgressionGame);
