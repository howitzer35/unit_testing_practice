var avg = require('../average');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Averages', function() {
  
  context('given variables', function() {
  it('returns the average', function() {
      var answer = avg(1, 5, 9);
      expect(answer).to.equal(5);
      });
    });
});