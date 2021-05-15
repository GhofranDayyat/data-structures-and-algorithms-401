'use strict';

const shift = require('../challenges/matrix/matrix.js');

const inpuArray=[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
const inpuArray2=[ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];

describe('Testing code challenge 4 ', () => {
  it('It should return array of the sum of each row.', () => {
    expect(shift(inpuArray)).toStrictEqual([6, 15, 18]);
    expect(shift(inpuArray2)).toStrictEqual([6, 5, 20]);

  });
});


