'use strict';

const linkedList= require('../challenges/linkedList/linked-list');

let ll = new linkedList();
let value = 'test value';
let value2 = 'test value2';
let value3 = 'test value3';
let value4 = 'test value4';

describe('ll Node class',()=>{
  it('Can successfully instantiate an empty linked list',()=>{
    expect(ll.head).toBeNull();
  });
  it('Can properly insert into the linked list',()=>{
    ll.insert(value);
    expect(ll.head.value).toEqual('test value');
    expect(ll.head.next).toBeNull();
  });
  it('The head property will properly point to the first node in the linked list',()=>{
    expect(ll.head.value).toEqual(value);
  });
  it('Can properly insert multiple nodes into the linked list',()=>{
    ll.insert(value2);
    ll.insert(value3);
    ll.insert(value4);

    expect(ll.head.next.value).toEqual('test value2');
    expect(ll.head.next.next.value).toEqual('test value3');
    expect(ll.head.next.next.next.value).toEqual('test value4');
  });
  it('Will return true when finding a value within the linked list that exists',()=>{
    let checkValue = ll.includes('test value4');
    expect(checkValue).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let checkValue = ll.includes('test value10');
    expect(checkValue).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let string = ll.toString();
    expect(string).toEqual(`{${value}}-->{${value2}}-->{${value3}}-->{${value4}}-->{null}`);
  });
});
