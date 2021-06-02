const fizzBuzzTree= require ('../challenges/fizzBuzzTree/fizzBuzzTree').FizzBuzzTree;
const KaryTree = require('../challenges/fizzBuzzTree/fizzBuzzTree').KaryTree;
const Node = require('../challenges/fizzBuzzTree/fizzBuzzTree').Node;

describe('Testing K-ary Tree',()=>{
  it('fizzBuzzTree function',()=>{
    let newTree = new KaryTree();
    let root = newTree.root = new Node(1,3);
    let one = root.children[0]=new Node(20,3);
    let sec = root.children[1]= new Node(10,2);
    let three = root.children[2]=new Node(18,1);
    one.children[0]=new Node(3,0);
    one.children[1]=new Node(90,0);
    one.children[2]=new Node(24,0);
    sec.children[0]=new Node(100,0);
    sec.children[1]=new Node(27,0);
    three.children[0]=new Node(45,0);
    expect(newTree.breadth()).toEqual([1,20,10,18,3,90,24,100,27,45]);
    expect(fizzBuzzTree(newTree).breadth()).toEqual(['1', 'Fizz', 'Fizz', 'Buzz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 'Buzz', 'FizzBuzz']);
  });
  it('fizzBuzzTree function',()=>{
    let newTree = new KaryTree();
    expect(fizzBuzzTree(newTree)).toEqual('Tree Empty');
  });
});
