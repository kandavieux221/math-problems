const getRandomMathProblem = () => {
  const numbers = [1, 2, 3, 4, 5];
  const operators = ["+", "-", "*", "/"];
  const problem = `${numbers[Math.floor(Math.random() * numbers.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${numbers[Math.floor(Math.random() * numbers.length)]}`;
  return problem;
};
