var containsVowel = require('../contains_vowel');
var chai = require('chai');
var expect = chai.expect;


describe('Testing if word contains a vowel', function() { 
    
  context('Contains Vowel', function() { 
      it('returns true because word contains vowel', function() {
        var result = containsVowel("noise")
        expect(result).to.equal(true);
        
      });
    });

});