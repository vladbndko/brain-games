import engine from '..';
import getRandomNum from '../utilities';

const gameRule = 'What number is missing in the progression?';

const generateProgression = (start, diff, length) => {
  let progression = [];
  for (let i = 0; i < length; i += 1) {
    progression = [...progression, start + diff * i];
  }
  return progression;
};

const start = getRandomNum(2, 10);
const step = getRandomNum(2, 10);
const length = 10;

const generateProgressionGame = () => {
  const progression = generateProgression(start, step, length);
  const hiddenNumber = progression[Math.floor(Math.random() * progression.length)];
  const question = progression.slice().join(' ').replace(hiddenNumber, '..');
  const correctAnswer = hiddenNumber.toString();
  return [question, correctAnswer];
};

export default () => engine(gameRule, generateProgressionGame);
