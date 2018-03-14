const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzzer', function(){
  it('should return fizz-buzz if % 15, buzz if % 5 and fizz if % 3', function() {
    const goodInputs = [
      [3, 'fizz'],
      [5, 'buzz'],
      [15, 'fizz-buzz'],
      [9, 'fizz'],
      [30, 'fizz-buzz']
    ];
    goodInputs.forEach(function(input) {
      const answer = (input[1] == fizzBuzzer(input[0]));
      expect(answer).to.be.true;
    });

    const badInputs = [
      ['fizz', 'fizz'],
      [4, 'fizz']
    ];
    badInputs.forEach(function(input) {
      const answer = (input[1] == fizzBuzzer(input[0]));
      expect(answer).to.be.false;
    });
  });
})
