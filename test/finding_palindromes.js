var isPalindrome = require('../finding_palindromes');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Finding Palindrome', function() {
  
  context('given word', function() {
  it('returns true', function() {
      var word = isPalindrome('racecar');
      expect(word).to.equal(true);

        });
    });

      context('given word', function() {
        it('returns false', function() {
            var word = isPalindrome('plebe');
            expect(word).to.equal(false);
        });
    });
});

