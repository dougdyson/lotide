const middle = require('../assertEqual');

// TEST CODE
console.log([]) // empty array - WORKS
console.log(middle([1,2,3,4,5,6])); // even: [1,2,5,6]- WORKS
console.log(middle([1,2,3,4,5])); // odd: [1,2,4,5] - WORKS
