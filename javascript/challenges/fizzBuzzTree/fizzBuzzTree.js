const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;



class Node{
  constructor(value){
    this.value=value;
    this.children=[];
  }
}
class KaryTree {
  constructor(){
    this.root= null;

  }


  breadth() {
    let result = [],
      current;
    let queue = new Queue();
    if (this.root) {
      current = this.root;
      queue.enqueue(current);
    } else return 'Tree Empty';
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      result.push(current.value);
      for (let i = 0; i < current.children.length; i++)
        if (current.children[i]) {
          queue.enqueue(current.children[i]);
        }
    }
    return result;

  }
}
// function FizzBuzzTree (ktree){
//   const fizzBuzzTree = new KaryTree(ktree);
//   fizzBuzzTree.root=ktree.root;
//   let q = new Queue();
//   if(!fizzBuzzTree.root) return 'Tree is Empty';
//   q.enqueue(fizzBuzzTree.root);
//   const _treversal=(node)=>{
//     if (node.value%15===0) node.value='FizzBuzz';
//     else if(node.value%5===0) node.value='Fizz';
//     else if(node.value%3===0) node.value= 'Buzz';
//     else node.value= `${node.value}`;
//     for (let i = 0; i < node.children.length -1; i++) {
//       q.enqueue(node.children[i]);
//       if(!q.isEmpty) _treversal(q.dequeue());
//     }
//   };
//   _treversal(q.dequeue());
//   return fizzBuzzTree;
// }

function FizzBuzzTree (tree) {
  if(!tree.root) return 'Tree Empty';
  const newTree = tree;
  let traversal = (node) => {
    if (node.value%15===0) node.value='FizzBuzz';
    else if(node.value%5===0) node.value='Fizz';
    else if(node.value%3===0) node.value= 'Buzz';
    else node.value= `${node.value}`;

    for (let i = 0; i < node.children.length; i++) {
      traversal(node.children[i]);
    }
  };
  traversal(newTree.root);
  return newTree;
}
module.exports = {
  FizzBuzzTree,
  KaryTree,
  Node,
};
