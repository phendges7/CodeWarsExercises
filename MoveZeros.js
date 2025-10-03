// function moveZeros(array) {
//   const newArray = [];
//   let j = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== 0) {
//       newArray[j] = array[i];
//       j++;
//     }
//   }
//   for (let k = newArray.length; k < array.length; k++) {
//     newArray[k] = 0;
//   }
//   console.log("array final with 0: ", newArray);
// }

function moveZeros(arr) {
  let result = arr.filter((num) => num !== 0);
  let resultZero = arr.filter((num) => num === 0);
  const resultTotal = result.concat(resultZero);
  return resultTotal;
}
moveZeros([1, 0, 2, 3]);
moveZeros([1, 2, 0, 1, 0, 0, 1, 0, 3, 0, 1]);
