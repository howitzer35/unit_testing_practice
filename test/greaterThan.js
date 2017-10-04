var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;

describe('Testing GreaterThan', function() {
  
  context('given variables', function() {
  it('returns true', function() {
      var answer = greaterThan(5, 6);
      expect(answer).to.equal(true);
      });
    });
});