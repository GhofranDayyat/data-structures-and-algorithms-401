const HashTable = require('../hashtable/hashtable');


module.exports=function repeatedWord(inputString){
  const arrOfwords = inputString.match(/\w+/g);
  const newTable = new HashTable(arrOfwords.length);
  for (let i = 0; i < arrOfwords.length; i++) {
    let key = arrOfwords[i].toLowerCase();
    if (newTable.contains(key)){
      if(newTable.get(key)===key) return newTable.get(key);
    }
    newTable.add(key,key);
  }
  return 'No Repeated Word';
};

