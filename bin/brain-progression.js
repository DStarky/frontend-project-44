#!/usr/bin/env node

import {
  askName, getAnswer, message,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();

console.log('What number is missing in the progression?');

function createProgression() {
  const progression = [];
  const initialValue = Math.floor(Math.random() * 10) + 1; // Начальное значение в прогрессии
  const randomRatio = Math.floor(Math.random() * 5) + 2; // Случайный множитель (шаг) в прогрессии

  for (let i = 0; i < 10; i += 1) {
    const value = initialValue + (randomRatio * i); // Рассчитываем текущее значение
    progression.push(value);
  }

  return progression;
}

function replaceRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length); // Генерируем случайный индекс
  const removedValue = arr[randomIndex]; // Сохраняем удаляемый элемент

  // eslint-disable-next-line no-param-reassign
  arr[randomIndex] = '..'; // Заменяем случайный элемент на ".."

  return removedValue; // Возвращаем убранное значение
}

function play() {
  for (let i = 0; i < 3; i += 1) {
    const progression = createProgression();
    const rightAnswer = replaceRandomElement(progression);
    console.log(`Question: ${progression.join(' ')}`);
    const playerAnswer = +getAnswer('Your answer: ');
    message(name, rightAnswer, playerAnswer);
    if (rightAnswer !== playerAnswer) return null;
  }
  return console.log(`Congratulations, ${name}!`);
}

play();
