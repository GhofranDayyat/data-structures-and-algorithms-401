'use strict';

const HashTable = require('../challenges/hashtable/hashtable/hashtable');
let hashTable = new HashTable(100);

describe('Take Size of Table', () => {
  it('should create a hashed table', () => {
    expect(hashTable.table.length).toEqual(100);
  });

  it('Take key and hash it==> return index', () => {
    expect(hashTable.hash('ghofran')).toBeLessThanOrEqual(100);
  });

  it('should add to the hashed table', () => {
    let key = 'ghofran';
    hashTable.set(key, 'dayyat');
    let bucket=hashTable.table[hashTable.hash(key)];
    expect(bucket).toBeDefined();
    expect(hashTable.contains(key)).toBeTruthy();
    expect(hashTable.get(key)).toEqual('dayyat');
  });
  it('contains(key)', () => {
    let key = 'ghofran';
    hashTable.set(key, 'dayyat');
    expect(hashTable.contains(key)).toBeTruthy();
    expect(hashTable.contains('notFound')).toBeFalsy();
  });
  it('get(key)', () => {
    let key = 'ghofran';
    let value = 'dayyat';
    expect(hashTable.get(key)).toEqual(value);
    expect(hashTable.get('notFound')).toBeNull();

  });

});
