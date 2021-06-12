function reverseArray(inputArr){
  let reult=[];
  for (let i=1;i<=inputArr.length;i++){
    reult.push(inputArr[inputArr.length-i]);
  }
  return reult;
}
module.exports=reverseArray;
