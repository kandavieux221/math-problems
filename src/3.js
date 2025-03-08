// Create a function that generates a random math problem
function getRandomMathProblem() {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  // Choose a random operator (+, -, x, /)
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  
  // Return the math problem as a string
  return `${num1} ${operator} ${num2}`;
}
