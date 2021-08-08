const numbers = [1, 2, 3, 4, 5];
const numbers_copy = numbers;
console.log("(numbers === numbers_copy):", numbers === numbers_copy);

const numbers_copy_spread = [...numbers];
console.log(
  "(numbers === numbers_copy_spread):",
  numbers === numbers_copy_spread
);

const numbers_copy_map = numbers.map((n) => n);
console.log("(numbers === numbers_copy_map):", numbers === numbers_copy_map);

const doubled = numbers.map((number) => number * 2);
console.log("(doubled):", doubled);
