import readlineSync from 'readline-sync';

export function askName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}

export function getAnswer(answer) {
  return readlineSync.question(answer);
}
