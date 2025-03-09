// Generate a random number between 1 and 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Use the random number to solve a math problem
function solveProblem() {
    const randomNumber = getRandomNumber();
    const problem = `What is ${randomNumber} x ${randomNumber}`;
    console.log(problem);
    return problem;
}

solveProblem();
