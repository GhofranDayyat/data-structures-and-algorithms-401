
function countWord(string) {
  let arrayOfWord = string.match(/\w+/g);
  let obj = {};
  for (let i = 0; i < arrayOfWord.length; i++) {
    if (!obj[arrayOfWord[i]]) {
      obj[arrayOfWord[i]] = 1;
    }else{
      obj[arrayOfWord[i]]++;
    }
  }
  let max =0;
  let arr =[];
  let output = Object.entries(obj);
  for (let i = 0; i < output.length; i++) {
    if(output[i][1]>max){
      max = output[i][1];
    }
  }
  for (let i = 0; i < output.length; i++) {
    if(output[i][1]===max){
      arr.push(output[i][0]);
    }
  }
  return arr[0];
}
countWord('hello for ohlle');

