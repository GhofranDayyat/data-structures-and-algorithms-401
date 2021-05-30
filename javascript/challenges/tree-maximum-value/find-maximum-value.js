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

  findMaximumValue(){
    if(!this.root) return 'tree is empty';
    let output = this.preOrder();
    let max = output[0];
    for(let i=1 ; i<=output.length;i++){
      if(max<output[i]) max=output[i];
    }
    return max;
  }
}


module.exports = {
  BinaryTree,
  Node,
};

