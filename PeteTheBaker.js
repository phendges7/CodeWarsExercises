function cakes(recipe, available) {
  const recipeEntries = Object.entries(recipe);
  let cakes = 0;
  let everythingAvailable = true;

  while (everythingAvailable) {
    everythingAvailable = recipeEntries.every(function (ingredientEntry) {
      const ingredient = ingredientEntry[0];
      const amountNeeded = ingredientEntry[1];

      if (available[ingredient] === undefined) return false;
      if (available[ingredient] < amountNeeded) return false;
      return true;
    });
    if (everythingAvailable) {
      for (const [ingredient, amountNeeded] of recipeEntries) {
        available[ingredient] -= amountNeeded;
      }
      cakes++;
    }
  }
  console.log(cakes);
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
cakes(recipe, available);
