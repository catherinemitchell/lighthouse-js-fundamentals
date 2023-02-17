function howManyHundreds (number) {
const remainder = number % 100
if (remainder < 100) {
  const multiple = number - remainder;
  const numHundreds = multiple / 100;
  return numHundreds;
}
return howManyHundreds()
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);