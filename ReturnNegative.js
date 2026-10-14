function makeNegative(num) {
  if (num === 0 || num < 0) return num;
  return (num = 0 - num);
}

makeNegative(42); // -42
makeNegative(-9); // -9
