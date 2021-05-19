const LinkedList= require('./ll-kth-from-end.js');

let lL1 = new LinkedList();
let lL2 = new LinkedList();

lL1.append(1);
lL1.append(3);
lL1.append(5);
lL1.append(7);


lL2.append(2);
lL2.append(4);
lL2.append(6);
lL2.append(8);
function zipLists(lL1, lL2) {
  let currentNode1 = lL1.head;
  let currentNode2 = lL2.head;
  let newLL = new LinkedList();

  let LL1Length = newLL.length(lL1);
  let LL2Length = newLL.length(lL2);
  let gratLength;
  if(LL1Length>LL2Length) {
    gratLength = LL1Length;
  } else {
    gratLength = LL2Length;
  }
  let count1=1;
  let count2=1;
  while (gratLength) {
    gratLength--;

    if (count1<=LL1Length) {
      newLL.append(lL1.kthFromEnd(LL1Length-count1));
      count1++;
    }
    if (count2<=LL2Length) {
      newLL.append(lL2.kthFromEnd(LL2Length-count2));
      count2++;
    }
  }
  return newLL;
}

zipLists(lL1, lL2);

module.exports={
  LinkedList,
  zipLists
};
