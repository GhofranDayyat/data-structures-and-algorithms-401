class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(){
    this.root= null;
  }
  preOrder(){ //Roor-Left-Right
    let output = [];
    function treversal(node){
      output.push(node.value);
      if(node.left) treversal(node.left); //if there is left ;recersive from these left
      if(node.right) treversal(node.right); //if there is right ;recersive from these right
    }
    treversal(this.root);
    return output;
  }

  inOrder(){ //Left-Roor-Right
    let output = [];
    function treversal(node){
      if(node.left) treversal(node.left); //if there is left ;recersive from these left
      output.push(node.value);
      if(node.right) treversal(node.right); //if there is right ;recersive from these right
    }
    treversal(this.root);
    return output;
  }

  postOrder(){ //Left-Right-Roor
    let output = [];
    function treversal(node){
      if(node.left) treversal(node.left); //if there is left ;recersive from these left
      if(node.right) treversal(node.right); //if there is right ;recersive from these right
      output.push(node.value);
    }
    treversal(this.root);
    return output;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value){
    if(typeof(value)!=='number') return 'Add number only to BinarySearchTree' ;
    let node=new Node(value);
    if(!this.root){
      this.root=node;
      return this;
    }
    let current  = this.root;
    while(current){
      if (node.value === current.value) return 'value already existing in BinarySearchTree';
      //insert in left if value<root
      if( node.value > current.value){
        if(!current.right){
          current.right=node;
        }else {
          current=current.right;
        }
      }
      //insert in right if value>root
      if( node.value < current.value){
        if(!current.left){
          current.left=node;
        }else {
          current=current.left;
        }
      }
    }
  }
  contains(value){
    let output = [];
    function treversal(node){
      output.push(node.value);
      if(node.left) treversal(node.left); //if there is left ;recersive from these left
      if(node.right) treversal(node.right); //if there is right ;recersive from these right
    }
    treversal(this.root);
    return output.includes(value);
  }
}
let binarySearchTree = new BinarySearchTree();
binarySearchTree.add(8);
binarySearchTree.add(3);
binarySearchTree.add(10);
binarySearchTree.add(1);
binarySearchTree.add(6);
binarySearchTree.add(14);
binarySearchTree.add(4);
binarySearchTree.add(7);
binarySearchTree.add(13);
binarySearchTree;

module.exports= {
  Node,
  BinarySearchTree,
  BinaryTree,
};

