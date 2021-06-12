'use strict';
const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

class PseudoQueue {
  constructor(){
    this.queue = new Stack();
  }
  enqueue(value){
    this.queue.push(value);
  }
  dequeue(){
    let storge=new Stack();
    if(storge.isEmpty()){
      while(!this.queue.isEmpty()){
        storge.push(this.queue.pop());
      }
    }
    let deleted=storge.pop();
    while(!storge.isEmpty()){
      this.queue.push(storge.pop());
    }
    return deleted;
  }}
module.exports=PseudoQueue ;
