function pigIt(str) {
  let arrayWords = str.split(" ");
  let arrayNewWords = [];
  for (const word of arrayWords) {
    if (word.search(/^[A-Za-z]+$/) !== -1) {
      let newWord = word.slice(1);
      newWord = newWord + word[0] + "ay";
      arrayNewWords.push(newWord);
    } else {
      arrayNewWords.push(word);
    }
  }
  arrayNewWords = arrayNewWords.join(" ");
  console.log(arrayNewWords);
}

pigIt("Pig latin is cool !");
