
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(root=null){
    this.root= root;
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


class BinarySearchTree extends BinaryTree {
  // constructor(root=null){
  //   this.root=root;
  // }
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
    return this.preOrder().includes(value);
  }
}
module.exports= {
  BinarySearchTree,
  BinaryTree,
  Node
};

// let one = new Node(1);

// let tree = new BinarySearchTree(one);

// tree.add(100);

// tree.add(5);
// tree.contains(1)
// tree.contains(2)
