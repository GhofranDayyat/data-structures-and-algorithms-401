let Node = require('../challenges/Tree/tree/tree').Node;
let BinarySearchTree = require('../challenges/Tree/tree/tree').BinarySearchTree;
let BinaryTree = require('../challenges/Tree/tree/tree').BinaryTree;




describe('BT',()=>{

  it('Can successfully instantiate an empty BT', () => {
    let binaryTree = new BinaryTree();
    expect(binaryTree.root).toBeNull();
  });

  it('Can successfully instantiate an empty BST',()=>{
    let binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree instanceof BinarySearchTree).toBeTruthy();
  });

  it('Can successfully instantiate a BT with a single root node',()=>{
    let binaryTree =new BinaryTree();
    let root = binaryTree.root = new Node(1);
    expect(root.value).toEqual(1);
  });

  it('Can successfully add a left child and right child to a single root node IN BT',()=>{
    let binaryTree =new BinaryTree();
    let root = binaryTree.root = new Node(1);
    let left = root.left = new Node(2);
    let right = root.right = new Node(3);
    expect(root.value).toEqual(1);
    expect(left.value).toEqual(2);
    expect(right.value).toEqual(3);
  });

  it('Can successfully return a collection from a preorder traversal IN BT',()=>{
    let binaryTree =new BinaryTree();
    let root = binaryTree.root = new Node(1);
    let left = root.left = new Node(2);
    let right = root.right = new Node(3);
    left.left = new Node(4);
    left.right = new Node(7);
    right.left = new Node(5);
    right.right = new Node(6);
    expect(binaryTree.preOrder()).toEqual([1,2,4,7,3,5,6]);
  });

  it('Can successfully return a collection from an inorder traversal IN BT',()=>{
    let binaryTree =new BinaryTree();
    let root = binaryTree.root = new Node(1);
    let left = root.left = new Node(2);
    let right = root.right = new Node(3);
    left.left = new Node(4);
    left.right = new Node(7);
    right.left = new Node(5);
    right.right = new Node(6);
    expect(binaryTree.inOrder()).toEqual([4,2,7,1,5,3,6]);
  });
  it('Can successfully return a collection from an postorder traversal IN BT',()=>{
    let binaryTree =new BinaryTree();
    let root = binaryTree.root = new Node(1);
    let left = root.left = new Node(2);
    let right = root.right = new Node(3);
    left.left = new Node(4);
    left.right = new Node(7);
    right.left = new Node(5);
    right.right = new Node(6);
    expect(binaryTree.postOrder()).toEqual([4,7,2,5,6,3,1]);
  });
  it('BST add() to the tree in the correct location', () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(100);
    binarySearchTree.add(50);
    binarySearchTree.add(25);

    binarySearchTree.add(75);
    binarySearchTree.add(200);

    binarySearchTree.add(155);

    expect(binarySearchTree.root.value).toEqual(100);
    expect(binarySearchTree.root.left.value).toEqual(50);
    expect(binarySearchTree.root.right.value).toEqual(200);
    expect(binarySearchTree.root.left.right.value).toEqual(75);
    expect(binarySearchTree.root.left.left.value).toEqual(25);
    expect(binarySearchTree.root.right.left.value).toEqual(155);
  });

  it('BST add() accept only number', () => {
    let binarySearchTree = new BinarySearchTree();
    expect(binarySearchTree.add('gh155')).toEqual('Add number only to BinarySearchTree');
  });

  it('BST add() value already existing in BinarySearchTree', () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(100);
    binarySearchTree.add(100);

    expect(binarySearchTree.root.value).toEqual(100);
    expect(binarySearchTree.add(100)).toEqual('value already existing in BinarySearchTree');
  });

  it('BST contains() return boolean if value tree contain value', () => {
    let binarySearchTree = new BinarySearchTree();
    binarySearchTree.add(100);
    binarySearchTree.add(50);
    expect(binarySearchTree.contains(50)).toBeTruthy();
    expect(binarySearchTree.contains(100)).toBeTruthy();
    expect(binarySearchTree.contains(5)).toBeFalsy();
  });



});


