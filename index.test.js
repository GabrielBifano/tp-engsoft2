const {
  add,
  subtract,
  multiply,
  divide,
  twoSum,
  factorate,
  isPrime
} = require('./index');


// Test for add function
test('add function should return the sum of two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

// Test for subtract function
test('subtract function should return the difference of two numbers', () => {
  expect(subtract(3, 2)).toBe(1);
});

// Test for multiply function
test('multiply function should return the product of two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});

// Test for divide function
test('divide function should return the quotient of two numbers', () => {
  expect(divide(6, 3)).toBe(2);
});

// Test for twoSum function
test('twoSum function should return true if there are two numbers that add up to the target', () => {
  expect(twoSum([1, 2, 3, 4], 7)).toBe(true);
});

// Test for factorate function
test('factorate function should return an array of factors of a number', () => {
  expect(factorate(10)).toEqual([1, 2, 5, 10]);
});

// Test for isPrime function
test('isPrime function should return true if a number is prime', () => {
  expect(isPrime(7)).toBe(true);
});

// Test for isPrime function
test('isPrime function should return false if a number is not prime', () => {
  expect(isPrime(4)).toBe(false);
});