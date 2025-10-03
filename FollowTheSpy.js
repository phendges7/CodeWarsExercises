function findRoutes(routes) {
  // Step 1: Find the first city
  // The first city is one that appears as 'from' but never as 'to'

  let allFromCities = [];
  let allToCities = [];

  // Collect all cities
  for (let i = 0; i < routes.length; i++) {
    allFromCities.push(routes[i][0]); // from city
    allToCities.push(routes[i][1]); // to city
  }

  // Find first city (in 'from' but not in 'to')
  let firstCity = null;
  for (let i = 0; i < allFromCities.length; i++) {
    let city = allFromCities[i];
    if (!allToCities.includes(city)) {
      firstCity = city;
      break;
    }
  }

  // Step 2: Build the journey
  let journey = [firstCity];
  let currentCity = firstCity;

  while (true) {
    let foundNext = false;

    // Find the route that starts with current city
    for (let i = 0; i < routes.length; i++) {
      if (routes[i][0] === currentCity) {
        let nextCity = routes[i][1];
        journey.push(nextCity);
        currentCity = nextCity;
        foundNext = true;
        break;
      }
    }

    if (!foundNext) {
      break; // No more destinations
    }
  }

  return journey.join(", ");
}
