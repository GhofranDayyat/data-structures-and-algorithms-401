'use strict';

let Node = require('../challenges/tree-maximum-value/find-maximum-value').Node;
let BT = require('../challenges/tree-maximum-value/find-maximum-value').BinaryTree;

describe('findMaximumValue() in BT',()=>{
  it('return maximun number in BT ',()=>{

    let tree = new BT();
    let root = tree.root = new Node(2);
    let left = root.left = new Node(7);
    let right= root.right = new Node(5);
    expect(tree.findMaximumValue()).toEqual(7);

    right.right = new Node(9);
    left.left = new Node(2);
    left.right = new Node(6);
    left.right.right=new Node(11);
    left.right.left=new Node(5);
    expect(tree.findMaximumValue()).toEqual(11);


  });

  it('findMaximumValue() in empty BT ',()=>{
    let tree = new BT();
    expect(tree.findMaximumValue()).toEqual('tree is empty');
  });

});
