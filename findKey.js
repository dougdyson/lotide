/*
REQUIREMENTS
* Implement the function findKey which takes in an object and a callback. 
* It should scan the object & return the first key for which the callback 
  returns a truthy value. 
* If no key is found, then it should return undefined.
  
  NOTE: need to come back to this and find a little more verbose approach

*/

 
const findKey = (users, cb) => Object.keys(obj).find(key => cb(obj[key]));

