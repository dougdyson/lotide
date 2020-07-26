// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return true;
//   } else {
//     return `\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`;
//   }
// };
const assertEqual = function(actual, expected, truthy) {

  let truth = true;

  console.log('SOF', actual, expected);
  if (actual.length !== expected.length){
    console.log('FAILED LENGTH', acutal, expected);
    truth = false;
  }
  console.log('PASSED LENGTH', actual, expected);

  for (let i = 0; i < actual.length; i++) {
    console.log('FOR', actual[i], expected[i]);
    if (actual[i] !== expected[i]) {
      console.log('FOR FAIL', truth, truthy)
      truth = false;  
    }
  }
  // test assertion against results
  console.log('TRUTH', truth, truthy);
  if (truth !== truthy) {
    console.log('NOT TRUE', truth, truthy);
    return false
  }
  return true;
}

const assertEqualArrays = function(array1, array2) {
 
  console.log('SOF', array1, array2);
  
  if (array1.length !== array2.length) {
    console.log('LENGTH MISMATCH', array1, array2);
    return false;
  }

  //  MENTOR QUESTION: should I be sorting these? 
  //Not sure if requirement is for a perfect match or not.
  //array1.sort(function(a, b){return a - b});
  //array2.sort(function(a, b){return a - b});

  //console.log('POST SORT', array1,array2);

  // return any mismatch between 2 stringified arrays as false
  if (assertEqual(array1, array2, true)) {
    console.log('FAILED EQ', array1,array2);
    return false;
  }
  // if we made it here, the arrays can be considered equivalent
  return true;
};

//TESTING:
console.log(assertEqual(assertEqualArrays(['1','2','3'], ['1','2','3']), true));
//console.log(assertEqual(['1','2'], ['1','2'], false));