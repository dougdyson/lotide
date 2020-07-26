const assertEqualArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }

  // return any mismatch between 2 arrays as false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`;
  }
};

//TESTING:
console.log(assertEqual(assertEqualArrays(['1','2','3'], ['1','2','3']), true));
console.log(assertEqual(['1','2'], ['1','2'], false));