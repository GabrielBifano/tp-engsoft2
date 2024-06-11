// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b; 
}

// Function to divide two numbers
function divide(a, b) {
  return a / b;
}

// Function to solve two-sum problem
function twoSum(nums, target) {
  
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in map) 
      return true;
    map[nums[i]] = i;
  }
  
  return false;
}

// Function to factorate a number
function factorate(n) {
  
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) 
      factors.push(i);
  }
  
  return factors;
}


// Function to check if a number is prime
function isPrime(n) {
  
  if (n <= 1) 
    return false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) 
      return false;
  }
  
  return true;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  twoSum,
  factorate,
  isPrime
};