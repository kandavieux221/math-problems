function calculateSum(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    if (typeof number === 'number') {
      sum += number;
    }
  });
  return sum;
}
