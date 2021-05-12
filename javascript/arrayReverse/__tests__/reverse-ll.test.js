'use strict';

const reverse = require('../array-reverse.js');
const inputArr=[1,2,3,4];
describe('Reverse', () => {
  it('should reverse input array', () => {
    expect(reverse(inputArr)).toStrictEqual([4,3,2,1]);
  });
});
