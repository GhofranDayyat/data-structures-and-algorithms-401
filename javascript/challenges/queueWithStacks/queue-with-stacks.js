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
    let currentNode = this.queue.top;
    if(currentNode===null){
      return 'Exception';
    }else{
      this.queue=new Stack();
      let pushArr =[];
      while(currentNode){
        pushArr.push(currentNode.value);
        currentNode=currentNode.next;
      }
      let length = pushArr.length-1;
      while(length){
        length--;
        this.queue.push(pushArr[length]);
      }
      return this;
    }

  }

}
module.exports=PseudoQueue ;
