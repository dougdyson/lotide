/*
Implement assertObjectsEqual which will take in two objects 
and console.log an appropriate message to the console.
*/

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "3" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

const eqObjects = function (object1, object2) {
  //console.log('object1 ', object1, ' object2', object2);

  // invalid input parameters
  if (!object1 || !object2){
    return false;
  }
  
  // MENTOR QUESTION 1: can this be reduced? Are both key and values required?
  // =================
  // transform objects into array1, array2
  let array1 = Object.values(object1);
  let array2 = Object.values(object2);
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  //console.log('array1:', array1, 'array2:', array2 );
  //console.log('keys1:', keys1, 'keys2:', keys2 );

  // MENTOR QUESTION 2 : can this be reduced?
  // ==================
  // make sure the objects transformed into arrays
  if (!Array.isArray(array1) && !Array.isArray(array2) || array1.length != array2.length){ 
    return false;
  } else if (!Array.isArray(keys1) && !Array.isArray(keys2) || keys1.length != keys2.length){
    return false;
  }

  // MENTOR QUESTION 3: code reduction? is there a better way to prepare 
  // =================
  // the data for comparisons?
  // sort array1, array2, keys1, keys2
  array1.sort();
  array2.sort();
  keys1.sort();
  keys2.sort();
  //console.log('SORTED array1:', array1, 'array2:', array2);
  //console.log('SORTED keys1:', keys1, 'keys2:', keys2);
  
  // MENTOR QUESTION 4: code reduction? is there a better way to prepare 
  // the data for comparisons?
  // turn arrays into strings
  let values1 = array1.join();
  let values2 = array2.join();
  let key1 = keys1.join();
  let key2 = keys2.join();
  //console.log('STRINGS: values1', values1, 'values2', values2 );
  //console.log('STRINGS: key1', key1, 'key2', key2 );
  
  // compare strings for match
  if (values1 !== values2 || key1 !== key2){
    return false;
  }

// if you made here, objects are considered equivalent;
return true;
}

console.log(eqObjects(cd, dc));



