'use strict';

class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}


class LinkedList{
  constructor(){
    this.head=null;
  }

  add(value){
    const node =new Node(value);
    if(!this.head){
      this.head=node;

    }else{
      let current = this.head;
      while(current.next){
        current= current.next;
      }
      current.next = node;
    }
  }

  get(){
    let current = this.head;
    let resultArr = [];
    resultArr.push(current);
    while(current.next){
      current=current.next;
      resultArr.push(current.value);
    }
    return resultArr;
  }
}

class HashTable{
  constructor(size){
    this.size=size;
    this.table=new Array(size);
  }

  hash(key){ //hash key =index
    let sum =  key.split('').reduce((acc,v)=>acc+v.charCodeAt(0),0); // sum of key's char in ASCI code
    return (sum * 17)%this.size; // multiply sum by prime number then mod size
  }

  set(key , value){
    const bucket=this.hash(key); //hash key
    if(!this.table[bucket]){ //check if it exist in the table
      this.table[bucket]= new LinkedList(); //if not exist create LL then store it in that location
    }
    this.table[bucket].add({[key]:value}); //whatever store value in LL as obj
  }
  contains(key){
    const bucket = this.hash(key);
    return this.table[bucket]?true:false;
  }
  get(key){ //tack key return it's value
    const bucket = this.hash(key);
    if(this.contains(key) && this.table[bucket].head){
      let current = this.table[bucket].head;
      if(Object.keys(current.value)[0] === key ) return current.value[key];
      while(current.next){
        current=current.next;
        if(Object.keys(current.value)[0] === key ) return current.value[key];

      }
    }
    return null;
  }
}


module.exports = HashTable;

