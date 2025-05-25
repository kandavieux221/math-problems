function calculateGCD(a, b) {
  if (b === 0) return a;
  else return calculateGCD(b, a % b);
}

function findPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) break;
    else primes.push(i);
  }
  return primes;
}

function isPrimeNumber(num) {
  if (num < 2) return false;
  else return isCompositeNumber(num) ? true : num === 2 || isEvenNum(num);
}

function isEvenNum(num) {
  return num % 2 === 0;
}

function isCompositeNumber(num) {
  for (let i = 3; i <= Math.sqrt(num); i += 2) if (num % i === 0) return true;
  else return false;
}
