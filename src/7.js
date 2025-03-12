const randomNumber = () => Math.floor(Math.random() * 10);

function getRandomProblem() {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const operator = ['+', '-', '*', '/'][randomNumber()];
  let solution;
  switch (operator) {
    case '+':
      solution = num1 + num2;
      break;
    case '-':
      solution = num1 - num2;
      break;
    case '*':
      solution = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        solution = num1 / num2;
      } else {
        return getRandomProblem();
      }
      break;
    default:
      return getRandomProblem();
  }
  return `${num1} ${operator} ${num2} = ${solution}`;
}
