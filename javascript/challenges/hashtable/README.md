# Hashtables
* a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found


## Challenge
### Implement a Hashtable with the following methods
- hash(key)
- set(key,value)
- get(key)
- contains(key)

## Approach & Efficiency
- **Time Complexity** Hash tables are often used to implement associative arrays, sets and caches. Like arrays, hash tables provide constant-time O(1) lookup on average, regardless of the number of items in the table. The (hopefully rare) worst-case lookup time in most hash table schemes is O(n)

-  **Space Complexity** O(n)
## API
1. set: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. get: takes in the key and returns the value from the table.
3. contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
4. hash: takes in an arbitrary key and returns an index in the collection