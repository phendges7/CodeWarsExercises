function getCount(str) {
  const counter = str.match(/[aeiou]/gi);
  console.log(counter ? counter.length : 0);
}

getCount("australopitecus");
getCount("my pyx");
