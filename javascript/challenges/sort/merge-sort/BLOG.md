# Insertion  Sort
- Merge Sort is a sorting algorithm that is based off of dividing the array into smaller arrays (lest & right) till the size becomes 1. Once the size becomes 1, the merge processes come into action and start merging arrays back using a helper function till the complete array is merged.


# Pseudo Code

```html
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

# Efficiency
* Time: O(n log n)

* Space: O(n)

# run Test 
``npm test merge-sort.test.js``

# Trace 
![check](../../../assets/merge-sort.jpeg)