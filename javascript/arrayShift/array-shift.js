'use strict';


function insertShiftArray (arry,num){
  const resArr=[];
  const middle= Math.ceil(arry.length/2);

  arry.splice(middle,0,num);

  return arry;
}
module.exports=insertShiftArray;
