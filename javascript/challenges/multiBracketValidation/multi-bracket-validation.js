'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

function multiBracketValidation(input){
  if (!input) {
    throw new Error('Should Enter String !');
  }
  const stack = new Stack();
  let lastPush = '';
  let brakets={
    '{':'}',
    '(':')',
    '[':']'
  };
  for (let inputChar of input) {
    let rejex = /[\{\[\(]/;
    if (rejex.test(inputChar)) {
      stack.push(inputChar);
      lastPush = inputChar;
    } else if (brakets[lastPush]===inputChar) {
      stack.pop();
      lastPush = stack.isEmpty() ? '' : stack.peek();
    } else if (inputChar === '}' || inputChar === ']' || inputChar === ')') {
      return false;
    }
  }
  return stack.isEmpty();
}


module.exports=multiBracketValidation;


