function flickSwitch(arr) {
  let flag = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      flag = !flag;
      arr[i] = flag;
    } else {
      arr[i] = flag;
    }
  }
  return arr;
}
