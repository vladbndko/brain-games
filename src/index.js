import readlineSync from 'readline-sync';

const maxRounds = 3;

export default (rule, getData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const game = (currentRounds) => {
    if (currentRounds === maxRounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, correct] = getData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!\n');
      game(currentRounds + 1);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".\n`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  game(0);
};
