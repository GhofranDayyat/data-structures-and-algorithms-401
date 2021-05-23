'use strict';

// const Stack =require('../challenges/stacksAndQueues/stacks-and-queues').Stack;
const PseudoQueue  = require('../challenges/queueWithStacks/queue-with-stacks');
describe('queueWithStacks method Test ',()=>{
  it('enqueue(value)',()=>{
    const q = new PseudoQueue ;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    const top=q.queue.top;
    expect(top.value).toBe(4);
    expect(top.next.value).toBe(3);
    expect(top.next.next.value).toBe(2);
    expect(top.next.next.next.value).toBe(1);
    expect(top.next.next.next.next).toBeNull();
  });
  it('dequeue() ',()=>{
    const q = new PseudoQueue ;
    expect(q.dequeue()).toEqual('Exception');
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.dequeue();
    const top=q.queue.top;
    expect(top.value).toBe(4);
    expect(top.next.value).toBe(3);
    expect(top.next.next.value).toBe(2);
    expect(top.next.next.next).toBeNull();
  });
});
