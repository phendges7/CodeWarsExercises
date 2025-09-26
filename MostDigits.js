function findLongest(array) {
  let longest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].toString().length > longest.toString().length) {
      longest = array[i];
    }
  }
  return longest;
}

console.log(findLongest([9000, 8, 800])); // 9000
console.log(findLongest([8, 900, 500])); // 900
console.log(findLongest([8, 900, 5000, 10000])); // 10000
