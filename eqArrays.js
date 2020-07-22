/*
REQUIREMENTS:
A function eqArrays which takes in two arrays and returns true or false, 
based on a perfect match.

TESTS:
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

*/



const assertEqual = function(actual, expected) {
  
  let arrayA = '';
  let arrayB = '';
  
  for (let a = 0; a < actual.length; a++) {
    if (actual[a] !== expected[a] ) {
     return false;   
    }
  }
  return true;
};

//console.log(assertEqual([1,2,3], [1,2,3]));
//console.log(assertEqual(['1','2','3'], ['1','2','3']));



