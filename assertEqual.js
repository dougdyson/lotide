/*
REQUIREMENTS:

Create a function which recieves 2 variables and returns if they are true or not

Message Copy Format:
[emoji emoji emoji] Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
[emoji emoji emoji] Assertion Passed: 1 === 1

Test at least the following scenarios:
* Comparing identical strings
* Comparing non-identical strings
* Comparing identical numbers
* Comparing non-identical numbers

*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return '\u2705\u2705\u2705 Assertion Passed: ' + actual + ' === ' + expected;
  } else {
    return '\u274C\u274C\u274C Assertion Failed: ' + actual + ' !== ' + expected;
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(1, 2));
// console.log(assertEqual([1,2,3], [1,2,3]));  Doesn't work for objects, yet!