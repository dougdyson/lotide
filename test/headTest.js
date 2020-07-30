const assert = require('chai').assert;
const head   = require('../head');

describe("should return 1 for [1,2,3]", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '4'); 
  });
  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5); 
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head([5, 6, 7]), 5); 
  });
  it("returns '[]' for []", () => {
    assert.strictEqual(head([]), ); 
  });

});

//TESTS
// console.log(assertEqual(head([])));