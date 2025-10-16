function add(x) {
  // Each add() call keeps its own total
  const fn = function (y) {
    // Allow calling with another add() chain
    const value = typeof y === "function" ? +y : y;
    return add(x + value);
  };

  // Define how the function behaves as a number
  fn.valueOf = function () {
    return x;
  };

  fn.toString = function () {
    return String(x);
  };

  return fn;
}

add(1);
add(1, 2);
