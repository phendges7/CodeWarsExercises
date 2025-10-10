// VERSAO MINHA ARCAICA
// function criarContador(arr) {
//   let mapNumbers = new Map();
//   for (const number of arr) {
//     mapNumbers.set(number, (mapNumbers.get(number) || 0) + 1);
//   }
//   return mapNumbers;
// }

// function deleteNth(arr, n) {
//   const newArray = [];
//   let mapNewArray = [];

//   for (const number of arr) {
//     newArray.push(number);
//     mapNewArray = criarContador(newArray);
//     if (mapNewArray.get(number) > n) newArray.pop();
//   }
//   mapNewArray = criarContador(newArray);
//   console.log(mapNewArray);
// }

//deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
//deleteNth([12, 39, 19, 39, 39, 19, 12], 1);

// VERSAO MELHORADA
// function createCounter(arr){
//   const mapNumber = new Map();
//     for(let i of arr){
//       mapNumber.set(i, (mapNumber.get(i) || 0) +1)
//     }

// return mapNumber
// }

// function deleteNth(arr,n){
//   let newArray = []
//   let mapNewArray = []

//  for(let i of arr){
//    newArray.push(i)
//    mapNewArray = createCounter(newArray)
// // i e o key dentro deste contexto do get
// // get e o metodo que ler o valor do i
//     if(mapNewArray.get(i) > n){
//       newArray.pop()
//     }

// }
// return newArray

// }

function deleteNth(arr, n) {
  const counts = new Map();
  const result = [];
  return arr.filter((num) => {
    const count = (counts.get(num) || 0) + 1;
    counts.set(num, count);
    if (count <= n) result.push(num);
    console.log(result);
  });
}
deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3);
