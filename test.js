// test.js

const { isEven, getRandomNumber, toTitleCase } = require("./src/utilities");

// Test isEven function
console.log(isEven(4)); // Should print: true
console.log(isEven(7)); // Should print: false

// Test getRandomNumber function
console.log(getRandomNumber(1, 10)); // Should print a random number between 1 and 10

// Test toTitleCase function
console.log(toTitleCase("hello world")); // Should print: Hello World
