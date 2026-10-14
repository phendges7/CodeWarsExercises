function digits(n) {
  arrayDigits = Array.from(String(n), Number);
  arrayResults = [];
  let k = 0;
  for (let i = 0; i < arrayDigits.length; i++) {
    for (let j = i + 1; j < arrayDigits.length; j++) {
      arrayResults[k] = arrayDigits[i] + arrayDigits[j];
      k++;
    }
    console.log(arrayResults);
  }
}

digits(12345);
