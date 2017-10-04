var doesExist = require('../hangman_lite');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Hangman', function() {
  
  context('given letter', function() {
  it('returns true if letter o is in the word', function() {
      var word = doesExist("o", "onomatopoeia");
      expect(word).to.equal(4);

        });
    });


});
