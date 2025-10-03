names = [
  "dog",
  "cat",
  "bat",
  "cock",
  "cow",
  "pig",
  "fox",
  "ant",
  "bird",
  "lion",
  "wolf",
  "deer",
  "bear",
  "frog",
  "hen",
  "mole",
  "duck",
  "goat",
];

function criarContador(chars) {
  const contador = {};
  for (let char of chars) {
    contador[char] = (contador[char] || 0) + 1;
  }
  console.log(contador);
  return contador;
}

function countAnimals(chars) {
  let charArray = chars.split("");
  console.log(charArray);
}

criarContador("goatcode");
//countAnimals("goatcode");
