import readlineSync from 'readline-sync';

export default (rule, getData) => {
  const finishCount = 3;
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const game = (playCount) => {
    if (playCount === finishCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, correct] = getData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      console.log('Correct!\n');
      game(playCount + 1);
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".\n`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  game(0);
};
