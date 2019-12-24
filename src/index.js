import readlineSync from 'readline-sync';

const maxCounter = 3;

export default (rule, getData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const startGame = (counter) => {
    if (counter === maxCounter) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, correct] = getData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!\n');
      startGame(counter + 1);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".\n`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  startGame(0);
};
