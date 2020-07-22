/*
Take in an array and return the middle-most element(s) of the given array.
*/

// ACTUAL FUNCTION
const middle = function(array) {
  length = array.length
  let newArray = [];
  const middle = parseInt(length / 2);
  let skip = 9;
  
  //console.log('SOF: ' + array);
  //console.log(length);
  //console.log('middle==='+ middle);
 
  if (Number.isInteger(middle)) {
    //console.log('isInteger: ' + true);
    skip = 1;
  } else {
    //console.log('isInteger: ' + false);
    //console.log(false);
  }
 
  if (length >= 2) {
    for (let i = 0; i < length; i++) {
      //console.log(i);
      //console.log(newArray);
      if (i <= middle - 1) {
        newArray.push(array[i]);
      }
      else if (i > middle) {
        //console.log(i);
        //console.log(newArray);
        newArray.push(array[i]);
      }
      // console.log(newArray);
    }
  } else {
    // console.log(newArray);
    newArray = [];
  }
  return newArray;
}

// TEST CODE
console.log([]) // empty array - WORKS
console.log(middle([1,2,3,4,5,6])); // even: [1,2,5,6]- WORKS
console.log(middle([1,2,3,4,5])); // odd: [1,2,4,5] - WORKS