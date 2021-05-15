'use strict';
class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class linkedList{
  constructor(){
    this.head=null;
  }
  insert(value){
    let node=new Node(value);
    if(!this.head){//LL empty
      this.head=node;
    } else{ //LL not empty add in the end
      let currentNode = this.head;
      while(currentNode.next){
        currentNode=currentNode.next; //move forward, change pointer
      }
      currentNode.next=node; //reach tail(null)empty
    }
  }
  includes(value){
    let currentNode = this.head;
    let checkValue;
    while(currentNode){
      if(currentNode.value===value){
        checkValue=true;
      }else{
        checkValue=false;
      }
      currentNode = currentNode.next;
    }
    return checkValue;
  }
  toString(){
    let currentNode = this.head;
    let string = `{${currentNode.value}}-->`;
    while(currentNode.next){
      currentNode=currentNode.next;
      string+=`{${currentNode.value}}-->`;
      if(currentNode.next ===null){
        string+=`{${currentNode.next}}`;
      }
    }
    return string;
  }
}
module.exports = linkedList;
