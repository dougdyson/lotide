const assertEqual = require('./assertEqual');

/* // const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return true;
//   } else {
//     return `\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`;
//   }
// }; */
/* const assertEqual = function(actual, expected, truthy) {

  let truth = true;

  if (actual.length !== expected.length){
    truth = false;
  }
  
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      truth = false;  
    }
  }
  // test assertion against results
  if (truth !== truthy) {
    return false
  }
  return true;
} */

const assertEqualArrays = function(array1, array2) {
 
  if (array1.length !== array2.length) {
    return false;
  }

  return true;
};

module.exports = assertEqualArrays;