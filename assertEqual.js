
// FUNCTION IMPLEMENTATION
 const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} === ${expected}`;
  }
};

/*  TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(1, 2));
console.log(assertEqual([1,2,3], [1,2,3]));  Doesn't work for objects, yet! */

module.exports = assertEqual;