'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;
function multiBracketValidation(input){
  let stack=new Stack();
  let braket = new Stack();
  let openingTaq = ['[','(','{'];
  let closingTaq = [']',')','}'];
  let arr=input.split('');
  arr.forEach(e=>{
    if(openingTaq.includes(e)||closingTaq.includes(e)){
      stack.push(e);
    }
  });

  let current= stack.top;
  while(current){
    if(current.next){
      if(current.value===']'&&current.next.value==='['){
        console.log('1',stack.pop(),stack.pop());
      }else if(current.value==='}'&&current.next.value==='{'){
        console.log('2',stack.pop(),stack.pop());

      }else if (current.value===')'&&current.next.value==='('){
        console.log('3',stack.pop(),stack.pop());
      }
      else{
        current.top = stack.pop();
        console.log(current.value,'4');
      }
    }
    current = current.next;
  }




  return stack.isEmpty();

}

module.exports=multiBracketValidation;
