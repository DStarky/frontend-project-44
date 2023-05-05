import readlineSync from 'readline-sync';

export function askName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}

export function getAnswer(answer) {
  return readlineSync.question(answer);
}

export function message(right, current) {
  if (right === current) {
    return console.log('Correct!');
  }
  return console.log(`'${current}' is wrong answer ;(. Correct answer was '${right}'.`);
}

export function getRandomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}
