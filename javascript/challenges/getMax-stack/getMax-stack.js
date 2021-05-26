const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

class StackWithMax extends Stack{


  getMax(){
    let maxstack=new Stack();
    let current=this.top;
    while(current){
      let max=current.value;
      if(!maxstack.isEmpty()&&maxstack.peek()>max){
        max=maxstack.peek();
      }
      maxstack.push(max);
      current=current.next;
    }
    return maxstack.peek();
  }
}

module.exports=StackWithMax;

