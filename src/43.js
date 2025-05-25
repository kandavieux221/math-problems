function findSmallestNumber(numbers) {
  let smallest = numbers[0];
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return smallest;
}

const numbers = [3, 7, 2, 8, 5, 4, 9];

console.log(findSmallestNumber(numbers));
