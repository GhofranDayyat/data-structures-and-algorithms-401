'use strict';

const LinkedList = require('./ll-kth-from-end');
let lL1 = new LinkedList();
let lL2 = new LinkedList();

function zipLists(lL1, lL2) {
  let currentNode1 = lL1.head;
  let currentNode2 = lL2.head;
  let newLL = new LinkedList();
  let LL1Length = newLL.linkedListLength(lL1);
  let LL2Length = newLL.linkedListLength(lL2);
  let gratLength;
  if(LL1Length>LL2Length) {
    gratLength = LL1Length;
  } else {
    gratLength = LL2Length;
  }
  for (let i = 0; i < gratLength; i++) {
    let count1=1;
    let count2=1;

    if (count1<LL1Length) {
      newLL.insert(lL1.kthFromEnd(LL1Length-count1));
      LL1Length++;
    }
    if (count2<LL2Length) {
      newLL.insert(lL2.kthFromEnd(LL2Length-count2));
      LL2Length++;
    }
  }
  return newLL;
}

zipLists(lL1, lL2);





