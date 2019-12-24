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

const length = 10;

const generateProgressionGame = () => {
  const start = getRandomNum(2, 10);
  const step = getRandomNum(2, 10);
  const progression = generateProgression(start, step, length);
  const hiddenElementIndex = progression[Math.floor(Math.random() * progression.length)];
  const question = progression.slice().join(' ').replace(hiddenElementIndex, '..');
  const correctAnswer = hiddenElementIndex.toString();
  return [question, correctAnswer];
};

export default () => engine(gameRule, generateProgressionGame);
