import engine from '..';

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

export default () => {
  const progression = () => {
    const numbers = generateNumber(5, 2, 10);
    const target = numbers[Math.floor(Math.random() * 10)];
    const progressionStr = numbers.slice().join(' ').replace(target, '..');
    return [progressionStr, `${target}`];
  };
  engine(
    'What number is missing in the progression?',
    progression,
  );
};
