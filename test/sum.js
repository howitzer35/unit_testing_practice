var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Sums', function() {
  
  context('given variables', function() {
  it('returns the sum', function() {
      var answer = sum(5, 9);
      expect(answer).to.equal(14);
      });
    });
});