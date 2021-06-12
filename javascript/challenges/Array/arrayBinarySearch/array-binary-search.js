'use strict';
function binarySearch (arr,num){
// let a =[4,8,15,16,23,42],

  let low=0;
  let high=arr.length-1;
  while(low<=high){
    const middle= Math.floor((low+high)/2);
    const test = arr[middle];
    if(test===num){
      return middle;
    }
    if(test>num){
      high= middle-1;
    }else{
      low = middle+1;
    }

  }
  return -1;
}
module.exports=binarySearch;
