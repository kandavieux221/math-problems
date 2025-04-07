// Node.js example: simple calculator with basic operations
console.log("Enter first number: ");
let num1 = parseFloat(prompt());

console.log("\nEnter operator (+, -, *, /): ");
let operator = prompt().toLowerCase();

if (operator === '+') {
    console.log(num1 + " + " + num2);
} else if (operator === '-') {
    console.log(num1 + " - " + num2);
} else if (operator === '*') {
    console.log(num1 + " * " + num2);
} else if (operator === '/') {
    console.log(num1 + " / " + num2);
}

function add(num1, num2) {
    return num1 + num2;
}
