function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  let limit = Math.sqrt(n);
  console.log(`Square root of ${n} is ${limit}`);

  for (let i = 3; i <= limit; i += 2) {
    console.log(`Checking ${n} % ${i} = ${n % i}`);
    if (n % i === 0) {
      console.log(`${n} is not a prime number`);
      return false;
    }
  }
  console.log(`${n} is a prime number`);
  return true;
}

isPrime(1);
isPrime(5);
isPrime(73);
