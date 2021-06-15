const quikSort = require('../challenges/sort/quik-sort/quik-sort');


describe('Testing mergeSort function',()=>{
  it('sort [20,18,12,8,5,-2]',()=>{
      console.log(quikSort([5,3,7,6,2,9]));
    // expect(quikSort([5,3,7,6,2,9])).toEqual([2,3,5,6,7,9]);
  });
//   it('sort [5,12,7,5,5,7]',()=>{
//     expect(quikSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
//   });
//   it('sort [2,3,5,7,13,11]',()=>{
//     expect(quikSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
//   });
});
