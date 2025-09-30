function moveZeros(array) {
  const newArray = [];
  let j = 0;
  const limit = array.length;
  for (let i = 0; i < limit; i++) {
    if (array[i] !== 0) {
      newArray[j] = array[i];
      j++;
    }
  }
  for (let k = newArray.length; k < array.length; k++) {
    newArray[k] = 0;
  }
  console.log("array final with 0: ", newArray);
}

moveZeros([1, 0, 2, 3]);
moveZeros([1, 2, 0, 1, 0, 0, 1, 0, 3, 0, 1]);
