const Stack =require('../challenges/Stack&Queue/stacksAndQueues/stacks-and-queues').Stack;
const Queue = require('../challenges/Stack&Queue/stacksAndQueues/stacks-and-queues').Queue;


describe('Stack',()=>{
  it('Can successfully push onto a stack',()=>{
    let stack = new Stack();
    expect(stack.push(1).top.value).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack',()=>{
    let stack = new Stack();
    expect(stack.push(1).top.value).toEqual(1);
    expect(stack.push(2).top.value).toEqual(2);
    expect(stack.push(3).top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });
  it('Can successfully pop off the stack',()=>{
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });
  it('Can successfully empty a stack after multiple pops',()=>{
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty).toBeTruthy();
  });
  it('Can successfully instantiate an empty stack',()=>{
    let stack = new Stack();
    let newNode = stack.push(1);
    expect(newNode.peek()).toEqual(1);
  });
  it('Can successfully instantiate an empty stack',()=>{
    let stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });
  it('Calling pop or peek on empty stack raises exception',()=>{
    let stack = new Stack();
    expect(stack.pop()).toEqual('Exception');
    expect(stack.peek()).toEqual('Exception');
  });
});






describe('Queue',()=>{
  it('Can successfully enqueue into a queue',()=>{
    let q = new Queue();
    expect(q.enqueue(1).front.value).toEqual(1);
  });
  it('Can successfully enqueue multiple values into a queue',()=>{
    let q = new Queue();
    expect(q.enqueue(1).front.value).toEqual(1);
    expect(q.enqueue(2).front.next.value).toEqual(2);
    expect(q.enqueue(3).front.next.next.value).toEqual(3);
  });
  it('Can successfully dequeue out of a queue the expected value',()=>{
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
  });
  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let q = new Queue();
    let newNode = q.enqueue(1);
    expect(newNode.peek()).toEqual(1);
  });
  it('Can successfully empty a queue after multiple dequeues',()=>{
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty).toBeTruthy();
  });

  it('Can successfully instantiate an empty queue',()=>{
    let q = new Queue();
    expect(q instanceof Queue).toBeTruthy();
  });
  it('Calling dequeue or peek on empty queue raises exception',()=>{
    let q = new Queue();
    expect(q.dequeue()).toEqual('Exception');
    expect(q.peek()).toEqual('Exception');
  });

});
