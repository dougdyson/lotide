/*
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing to just these scenarios:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
*/

function removeUnwanted (source, itemsToRemove){

  //console.log(source, itemsToRemove);

  let wantedItems = [];

  
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let s = 0; s < source.length; s++) {
      //console.log('i:'+ i + ' ' + itemsToRemove[i]);
      //console.log('s:'+ s + ' ' + source[s]);
      //wantedItems = wantedItems.filter(itemsToRemove[i]);

      if (itemsToRemove[i] !== source[s]) {
        wantedItems.push(source[s]);
        //console.log('wantedItem: ' + source[s]);
        //console.log('Want: ' + wantedItems);
      } else {
        //console.log('Not wanted: ' + itemsToRemove[i]);
      }     
    } 
  }
  return wantedItems;
}

console.log(removeUnwanted([1,2,3],[1,2]));

