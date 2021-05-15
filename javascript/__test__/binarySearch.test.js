'use strict';

const binarySearch = require('../challenges/arrayBinarySearch/array-binary-search.js');

const inpuArray=[4,8,15,16,23,42];
describe('binary ', () => {
  it('It should return the index of matching value with the 2ed parametr ', () => {
    expect(binarySearch(inpuArray,15)).toStrictEqual(2);
    expect(binarySearch(inpuArray,99)).toStrictEqual(-1);
  });
});
