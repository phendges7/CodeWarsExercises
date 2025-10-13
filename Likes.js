function likes(names) {
  switch (names.length) {
    case 0:
      console.log("no one likes this");
      break;
    case 1:
      console.log(`${names[0]} likes this`);
      break;
    case 2:
      console.log(`${names[0]} and ${names[1]} like this`);
      break;
    case 3:
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
      break;
    default:
      const newArray = [names[0], names[1]];
      let newString = newArray.join(", ");
      newString = newString + ` and ${names.length - 2} others like this`;
      console.log(newString);
      break;
  }
}
likes([]);
likes(["Peter"]);
likes(["Jacob", "Alex"]);
likes(["Alex", "Jacob", "Mark", "Max"]);
likes(["Alex", "Jacob", "Mark", "Max", "Pedro", "Luiz", "Mayza"]);
