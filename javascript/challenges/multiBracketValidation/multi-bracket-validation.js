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
  let result=true;
  while(current){
    console.log(current.value);
    if(current.value===']'|| current.value==='}'||current.value===')' ){

      braket.push(current);
    } else if(current.value === '(' || current.value === '[' || current.value === '{') {
      if(braket.isEmpty()) {
        result= false;
      } else {

        stack = braket.peek();
        if((current.value === '(' && stack.value === ')') || (current.value === '[' && stack.value === ']') || (current.value == '{' && stack.value == '}')) {
          console.log(braket.pop().value,'poping');
        } else {
          console.log(false,'1000');
          result=false;
        }
      }
    }

    current = current.next;
  }
  return result;

}

module.exports=multiBracketValidation;
