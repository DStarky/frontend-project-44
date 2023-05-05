#!/usr/bin/env node

import {
  askName, getAnswer, getRandomNumber, message,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function play() {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = getAnswer('Your answer: ');
    message(name, rightAnswer, playerAnswer);
    if (rightAnswer !== playerAnswer) return null;
  }
  return console.log(`Congratulations, ${name}!`);
}

play();
