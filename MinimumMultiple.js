function findMultiple() {
  let multiples = 0;
  let number = 0;
  while (multiples < 10 && number < 3000) {
    number++;
    console.log("number is ", number);
    for (i = 1; i <= 10; i++) {
      if (number % i == 0) {
        multiples++;
        console.log("can be divided by: ", i);
        console.log("number of multiples: ", multiples);
      }
    }
    if (multiples != 10) {
      multiples = 0;
    }
  }
}

findMultiple();
