const assertEqual = require('../assertEqual');
const assertEqualArrays = require('../assertArrayEqual');

//TESTING:
console.log(assertEqual(assertEqualArrays(['1','2','3'], ['1','2','3']), true));
console.log(assertEqual(['1','2'], ['1','2'], false));
