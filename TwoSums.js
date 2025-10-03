function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        console.log(`Indexes: ${i}, ${j}`);
        return [i, j];
      }
    }
  }
}

twoSum([1, 2, 3], 4);
twoSum([3, 2, 4], 6);
twoSum([2, 2, 3], 4);
