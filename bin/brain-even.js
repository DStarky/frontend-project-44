#!/usr/bin/env node
import { askName, getAnswer } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function play() {
  let isWin = false;
  let rightAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    const isEven = randomNumber % 2 === 0;
    console.log(`Question: ${randomNumber}`);
    const answer = getAnswer('Your answer: ');
    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`'${isEven ? 'no' : 'yes'}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }
  if (rightAnswers === 3) isWin = true;
  return isWin ? console.log(`Congratulations, ${name}!`) : null;
}

play();
