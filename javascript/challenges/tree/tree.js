'use strict';


class Node{
  constructor(value,left = null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree{
  constructor(root=null){
    this.root= root;
  }
  preOrder(){ //Roor-Left-Right
    let output = [];
    let treversal =(node=>{
      output.push(node.value);
      if(node.left) treversal(node.left); //if there is left ;recersive from these left
      if(node.right) treversal(node.right); //if there is right ;recersive from these right
    });
    treversal(this.root);
    return output;
  }

  inOrder(){ //Left-Roor-Right
    let output = [];
    let treversal =(node=>{
      if(node.left) treversal(node.left); //if there is left ;recersive from these left
      output.push(node.value);
      if(node.right) treversal(node.right); //if there is right ;recersive from these right
    });
    treversal(this.root);
    return output;
  }

  postOrder(){ //Left-Right-Roor
    let output = [];
    let treversal =(node=>{
      if(node.left) treversal(node.left); //if there is left ;recersive from these left
      if(node.right) treversal(node.right); //if there is right ;recersive from these right
      output.push(node.value);
    });
    treversal(this.root);
    return output;
  }
}
class BinarySearchTree{
  constructor(root=null){
    this.root=root;
  }
  add(value){
      if(typeof(value)!=='number') return 'Add number to BinarySearchTree' ;

    if(!this.root){
      this.root=new Node(value);
      return this;
    }
    let current  = this.root 
    while(current){
        
    }
  }
}


module.exports = {
  BinaryTree:BinaryTree,
  Node:Node,
  BinarySearchTree :BinarySearchTree
};
