function removeSpaces(str) {
  const myArray = str.split(" ");
  const newArray = myArray.join("");

  console.log(newArray);
}

removeSpaces("OLA COMO VAI VOCE?");
