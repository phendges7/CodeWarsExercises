function warnTheSheep(queue) {
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf" && queue[i] == queue.at(-1)) {
      return "Pls go away and stop eating my sheep";
    }
    if (queue[i] === "wolf") {
      return `Oi! Sheep number ${
        queue.length - i - 1
      }! You are about to be eaten by a wolf!`;
    }
  }
}

// new tip: use .at() method to get the last element of an array
// new tip: reverse() method mutates the original array, so be careful when using it

warnTheSheep(["sheep", "sheep", "wolf"]); // "Pls go away and stop eating my sheep"
warnTheSheep(["sheep", "wolf", "sheep"]); // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]); // "Oi! Sheep number 5! You are about to be eaten by a wolf!"
