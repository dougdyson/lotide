const assert = require('chai').assert;
const tail = require('../tail');

//TESTS
const words = ["Yo Yo", "Lighthouse", "Labs"];
describe('should return true for words.length, 3', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail(words.length, 3), 1);
  })});