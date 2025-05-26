function findMaxSubarray(arr) {
  let maxSoFar = arr[0];
  let currentMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    if (currentMax > maxSoFar) {
      maxSoFar = currentMax;
    }
  }

  return maxSoFar;
}
