function findOutlier(integers) {
  let evenCounter = 0;
  let oddCounter = 0;
  let outlier = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) evenCounter++;
    else oddCounter++;
  }
  if (evenCounter > oddCounter) {
    for (const number of integers) {
      if (number % 2 !== 0) outlier = number;
    }
  } else {
    for (const number of integers) {
      if (number % 2 === 0) outlier = number;
    }
  }
  console.log(outlier);
}
findOutlier([0, 1, 2]); // 1
findOutlier([1, 2, 3]);
