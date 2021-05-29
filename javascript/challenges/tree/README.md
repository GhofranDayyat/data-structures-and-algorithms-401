# Trees
* Node - A Tree node is a component which may contain it’s own values, and references to other nodes
* Root - The root is the node at the beginning of the tree
* K - A number that specifies the maximum number of children any node may have in a k-ary tree. In a binary tree, k = 2.
* Left - A reference to one child node, in a binary tree
* Right - A reference to the other child node, in a binary tree
* Edge - The edge in a tree is the link between a parent and child node
* Leaf - A leaf is a node that does not have any children
* Height - The height of a tree is the number of edges from the root to the furthest leaf
* **Traversals**  
 1. Traversals
 2. Breadth First
* **Binary Search Tree (BST)**: is a type of tree that does have some structure attached to it. In a BST, nodes are organized in a manner where all values that are smaller than the root are placed to the left, and all values that are larger than the root are placed to the right.


## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
* The Big O time complexity of a Binary Search Tree’s insertion and search operations is O(h), or O(height).
* Big O space complexity of a BST search would be O(n)

## API
* ``preOrder()``: Travers Roor-Left-Right
* ``inOrder()``:  Travers Left-Roor-Right
* ``postOrder()`` :  Travers Left-Right-Roor
* ``add(value)`` : accepts a value, and adds a new node with that value in the correct location in the binary search tree.
* ``contains(value)`` :  accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
