var hares = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;
    
    describe('Testing Cherokee Hare', function() {
      
      context('given this', function() {
      it('returns population', function() {
          var cherokeeHares = hares(200)
          expect(cherokeeHares).to.equal(300);
    
            });
        });
    });
    
    