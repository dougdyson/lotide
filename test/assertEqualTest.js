const assertEqual = require('../assertEqual');

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(1, 2));
// console.log(assertEqual([1,2,3], [1,2,3]));  Doesn't work for objects, yet!

