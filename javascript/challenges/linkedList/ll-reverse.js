const LinkedList= require('./linked-list-class6');
let newNode= new LinkedList();
newNode.append(2);
newNode.append(3);
newNode.append(4);
newNode.append(5);

var reverse = function(ll) {
  let pre = new LinkedList();
  let currentNode = ll.head;
  while(currentNode) {
    let nextNode = currentNode.next; //N3
    currentNode.next=pre.head; //null
    pre.head = currentNode; //N2
    currentNode=nextNode; //N3
  }
  console.log(pre);
};
reverse(newNode);
