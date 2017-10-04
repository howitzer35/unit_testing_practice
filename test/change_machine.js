var changeMachine = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Change Machine', function() {
  
  context('changeMachine calculator', function() {
  it('returns [2, 0, 1, 2]', function() {
      var amount = changeMachine(47);
      expect(amount).to.eql([2, 0, 1, 2]);

        });
    });

});


