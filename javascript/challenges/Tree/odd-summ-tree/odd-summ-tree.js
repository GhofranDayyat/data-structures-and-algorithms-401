class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
  inOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }
  sumallodds(){
    let sum =0;
    let output =this.inOrder();
    for (let i = 0; i < output.length; i++) {
      if (!(output[i] %2===0)){
        sum+=output[i];
      }
    }
    return sum;
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
binarySearchTree.sumallodds();
