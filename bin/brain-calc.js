#!/usr/bin/env node

import {
  askName, getAnswer, getRandomNumber, message,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();

console.log('What is the result of the expression?');

function play() {
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operator = operators[Math.floor(Math.random() * 3)];
    let rightAnswer;
    switch (operator) {
      case '+':
        rightAnswer = firstNumber + secondNumber;
        break;
      case '-':
        rightAnswer = firstNumber - secondNumber;
        break;
      case '*':
        rightAnswer = firstNumber * secondNumber;
        break;
      default:
        break;
    }
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const playerAnswer = +getAnswer('Your answer: ');
    if (rightAnswer === playerAnswer) {
      message(rightAnswer, playerAnswer);
    } else {
      message(rightAnswer, playerAnswer);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

play();
