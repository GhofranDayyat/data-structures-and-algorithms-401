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
    if(!storge.top){ // is empty
      while(this.queue.top){ // isn't empty
        storge.push(this.queue.pop());
      }
    }
    let deleted=storge.pop();
    while(storge.top){ // isn't empty
      this.queue.push(storge.pop());
    }
    return deleted;
  }}
module.exports=PseudoQueue ;
