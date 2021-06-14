module.exports = function mergeSort(arr) {
  if (arr.length > 1) {
    let n = Math.floor(arr.length / 2);
    let left = arr.slice(0, n);
    let right = arr.slice(n);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }else{
    return 'array is Empty!!';
  }
  return arr;
};

function merge(left, right, arr) {
  let i = 0, // left count
    j = 0, // right count
    k = 0; // arr count
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}
