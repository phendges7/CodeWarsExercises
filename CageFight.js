function headSmash(array) {
  console.log(typeof array);
  if (typeof array === "number") {
    return "This isn't the gym!!";
  }

  if (array.length === 0) {
    return "Gym is empty";
  }

  const result = array.map((char) => {
    return char.replace(/O/g, " ");
  });
  return result;
}

headSmash(["H", "E", "L", "L", "O"]); // "HELL "
headSmash(123); // "This isn't the gym!!"
