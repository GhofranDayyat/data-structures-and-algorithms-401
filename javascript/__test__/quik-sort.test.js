const quikSort = require('../challenges/sort/quik-sort/quik-sort');


describe('Testing mergeSort function',()=>{
  it('sort [20,18,12,8,5,-2]==> [4,8,15,16,23,42]',()=>{
    let arr = [8,4,23,42,16,15];
    expect(quikSort(arr, 0, arr.length - 1)).toStrictEqual([4,8,15,16,23,42]);
  });
  it('sort [5,12,7,5,5,7]==> [5,5,5,7,7,12]',()=>{
    let arr = [5,12,7,5,5,7];
    expect(quikSort(arr, 0, arr.length - 1)).toEqual([5,5,5,7,7,12]);
  });
  it('sort [2,3,5,7,13,11]==> [2,3,5,7,11,13]',()=>{
    let arr =[2,3,5,7,11,13];
    expect(quikSort(arr, 0, arr.length - 1)).toEqual([2,3,5,7,11,13]);
  });
});
