// Random math problem generator using Node.js

const prompt = require("prompt-sync")();

let num1;
let num2;
let answer;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

while (true) {
  // Generate two random numbers between 1 and 10
  num1 = getRandomInt(10);
  num2 = getRandomInt(10);
  answer = num1 + num2;

  console.log(`What is ${num1} + ${num2}?`);
  const userAnswer = prompt();

  if (userAnswer == answer) {
    console.log("Correct!");
    break;
  } else {
    console.log("Incorrect, try again.");
  }
}
