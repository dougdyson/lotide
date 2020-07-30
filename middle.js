/*
Take in an array and return the middle-most element(s) of the given array.
*/



// ACTUAL FUNCTION
const middle = function(array) {
  length = array.length
  let newArray = [];
  const middle = parseInt(length / 2);
  let skip = 9;
  
  if (Number.isInteger(middle)) {
    skip = 1;
  }
 
  if (length >= 2) {
    for (let i = 0; i < length; i++) {
      if (i <= middle - 1) {
        newArray.push(array[i]);
      }
      else if (i > middle) {
        newArray.push(array[i]);
      }
    }
  } else {
    newArray = [];
  }
  return newArray;
}


module.exports = middle;