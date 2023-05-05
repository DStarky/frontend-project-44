#!/usr/bin/env node

import {
  askName, getAnswer, getRandomNumber, message,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();

console.log('Find the greatest common divisor of given numbers.');

function nod(a, b) {
  let divisor = 1;
  let gcd = 1;

  while (divisor <= Math.min(a, b)) {
    if (a % divisor === 0 && b % divisor === 0) {
      gcd = divisor;
    }
    divisor += 1;
  }

  return gcd;
}

function play() {
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const rightAnswer = nod(firstNumber, secondNumber);
    const playerAnswer = +getAnswer('Your answer: ');
    message(name, rightAnswer, playerAnswer);
    if (rightAnswer !== playerAnswer) return null;
  }
  return console.log(`Congratulations, ${name}!`);
}

play();
