'use strict';

const shift = require('../challenges/arrayShift/array-shift.js');

const inpuArray=[4,8,15,23,42];
describe('Testing code challenge 2 ', () => {
  it('It should element in middle index and shifts other elements in the array to fill the new gap', () => {
    expect(shift(inpuArray,16)).toStrictEqual([4,8,15,16,23,42]);
  });
});


