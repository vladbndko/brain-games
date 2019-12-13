import readlineSync from 'readline-sync';

export default (rule, logic) => {
  const finishCount = 3;
  let playCount = 0;
  console.log('Welcome to the Brain Games!\n');
  console.log(`${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const game = () => {
    const [question, correct] = logic();
    if (playCount === finishCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correct) {
      playCount += 1;
      console.log('Correct!\n');
      game();
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".\n`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  game();
};
