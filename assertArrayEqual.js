const assertEqual = function(array1, array2, truth) {
  
  // return any mismatch between 2 arrays as false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || typeof array1[i] !== typeof array2[i]) {
      return false; 
    }
  }
  // validate assertion passed into array and return boolean
  if (truth === true) {
    return true;
  } else {
    return false;
  }
};

//TESTING:
//console.log(assertEqual([1,2,3], [1,2,3], false));
//console.log(assertEqual(['1','2','3'], ['1','2',3], true));