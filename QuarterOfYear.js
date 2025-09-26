function quarterOfYear(m) {
  console.log(m / 3);
  return Math.ceil(m / 3);
}

console.log(quarterOfYear(1)); // 1
console.log(quarterOfYear(4)); // 2
console.log(quarterOfYear(7)); // 3
console.log(quarterOfYear(10)); // 4
