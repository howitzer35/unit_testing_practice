var tallestMountain = require('../tallest_mountain');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Tallest Mountain', function() {
  
  context('given mountain heights of [1, 2, 3]', function() {
  it('returns 3 as the tallest mountain', function() {
      var tallest = tallestMountain([1, 2, 3]);
      expect(tallest).to.equal(3);
  });
});
});