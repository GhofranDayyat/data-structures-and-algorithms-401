'use strict';

function matrix (arr){
  let sumation;
  let resArr=[];
  for (let i = 0; i < arr.length; i++) {
    sumation=0;
    for (let j = 0; j < arr[i].length; j++) {
      sumation+=arr[i][j];
    }
    resArr.push(sumation);
  }
  return resArr;
}
module.exports=matrix;
