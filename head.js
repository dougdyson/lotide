const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === undefined || expected === undefined) {
//     return;
//   } else if (actual === expected) {
//     return `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     return `\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`;
//   }
// };

const head = function(array){
  return array[0];
}
//TESTS
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([])));



