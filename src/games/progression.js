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

const progressionStart = getRandomNum(2, 10);
const progressionStep = getRandomNum(2, 10);
const progressionLength = 30;

const generateProgressionGame = () => {
  const progression = generateProgression(
    progressionStart,
    progressionStep,
    progressionLength,
  );
  const hiddenNumber = progression[Math.floor(Math.random() * progression.length)];
  const question = progression.slice().join(' ').replace(hiddenNumber, '..');
  const correctAnswer = hiddenNumber.toString();
  return [question, correctAnswer];
};

export default () => engine(gameRule, generateProgressionGame);
