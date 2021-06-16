// 'use strict';

module.exports =function quickSort(arr,left,right){

  if(left>=right) {
    return;
  }
  let posistion = Partition(arr,left,right);

  quickSort(arr, left, posistion - 1);
  quickSort(arr,posistion + 1, right);
  return arr;
};
function Partition(arr, left, right){
  let pivot = arr[right];
  let low = left-1;
  for(let i =left ;i<right;i++){
    if(arr[i]<= pivot){
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr,right,low+1);
  return low+1;
}

function swap(arr, i, low){
  let temp;
  temp=arr[i];
  arr[i]=arr[low];
  arr[low]=temp;
}




// module.exports =function quickSort(arr,left,right){

//   if(left>=right) {
//     return;
//   }
//   let posistion = Partition(arr,left,right);

//   quickSort(arr, left, posistion - 1);
//   quickSort(arr,posistion + 1, right);
//   return arr;
// };

// function Partition(arr, left, right){
//   let pivot = arr[right];
//   let low = left-1;
//   for(let i =left ;i<=right;i++){
//     if(arr[i]<= pivot){

//       swap(arr, i, ++low);
//     }

//   }
//   // swap(arr,right,low);
//   return low;
// }

// function swap(arr, i, low){
//   let temp;
//   temp=arr[i];
//   arr[i]=arr[low];
//   arr[low]=temp;
// }

