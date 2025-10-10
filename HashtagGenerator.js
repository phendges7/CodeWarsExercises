function generateHashtag(str) {
  let hashtagFinal = "";
  if (!str) return false;
  for (const char of str) {
    if (char !== " ") {
      let arrayWords = str.split(" ");
      let i = 0;
      for (let word of arrayWords) {
        if (word === "") {
          i++;
          continue;
        }
        let firstLetter = word[0].toUpperCase();
        word = firstLetter + word.slice(1);
        arrayWords[i] = word;
        i++;
      }

      hashtagFinal = "#" + arrayWords.join("");
      if (hashtagFinal.length > 140) {
        console.log("REALLY LONG HASHTAG");
        return false;
      }
    } else {
      console.log("ENTROU ELSE");
      return false;
    }
  }
}

//generateHashtag("Do We have A Hashtag");
//generateHashtag("code" + " ".repeat(140) + "wars");
//generateHashtag(
("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat");
//);
generateHashtag(" u i  lbe");
