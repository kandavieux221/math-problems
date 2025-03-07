const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateMathProblems = () => {
  const operations = ['+', '-', '*', '/'];
  const numbers = [getRandomInt(0, 10), getRandomInt(11, 20), getRandomInt(21, 30)];
  const operation = operations[getRandomInt(0, 3)];
  const problemString = `${numbers[0]} ${operation} ${numbers[1]} =`;
  return { problem: problemString, answer: numbers[2] };
};
