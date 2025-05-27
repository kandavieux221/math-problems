function multiply(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Both inputs must be integers.");
  }
  return a * b;
}

console.log(multiply(3, 4)); // Output: 12
