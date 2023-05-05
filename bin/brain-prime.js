#!/usr/bin/env node

import {
  askName, getAnswer, getRandomNumber, message,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isPrimeNumber(num) {
  if (num <= 1) {
    return false; // Числа меньше или равные 1 не являются простыми
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false; // Число делится на i без остатка, значит оно не является простым
    }
  }

  return true; // Число является простым
}

function play() {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    const rightAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = getAnswer('Your answer: ');
    message(name, rightAnswer, playerAnswer);
    if (rightAnswer !== playerAnswer) return null;
  }
  return console.log(`Congratulations, ${name}!`);
}

play();
