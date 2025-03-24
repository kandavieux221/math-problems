function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, sum = 0;
  while (sum < n) {
    [a, b] = [b, a + b];
    sum += b;
  }
  return a;
}

function primeNumbers(limit) {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const result = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result;
}

function calculateMean(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) throw new Error("The input array is empty or null.");

  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

function findClosestValue(sortedNumbers, targetValue) {
  if (!Array.isArray(sortedNumbers)) throw new Error("The 'sortedNumbers' parameter should be an array.");
  if (sortedNumbers.length === 0) throw new Error("The 'numbers' parameter cannot be empty.");

  let minDiff = Infinity;
  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    const diff = Math.abs(sortedNumbers[i] - targetValue);
    if (diff < minDiff) minDiff = diff;
  }

  return sortedNumbers[minDiff];
}

function getRandomInt(maxNum) {
  return Math.floor(Math.random() * maxNum);
}
