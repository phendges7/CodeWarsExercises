function checkCase(str) {
  if (str === str.toUpperCase()) {
    console.log("true");
  } else {
    console.log("false");
  }
}

checkCase("HELLO"); // 'true'
checkCase("Hello"); // 'false'
checkCase("!"); // 'false'
