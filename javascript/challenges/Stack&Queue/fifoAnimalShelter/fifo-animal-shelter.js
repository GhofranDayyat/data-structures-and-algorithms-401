'use strict';
class Cat{
  constructor(type){
    this.type = type;
  }
}

class Dog{
  constructor(type){
    this.type = type;
  }
}
class AnimalShelter {
  constructor(){
    this.dogs=[];
    this.cats=[];
  }
  enqueue(animal){ //add (animal) it's dogs or cats obj

    if(animal==='cat'){
      this.cats.push(new Cat('cat'));
      return this.cats;
    }else if(animal==='dog'){
      this.dogs.push(new Dog('dog'));
      return this.dogs;
    }else{
      return 'not a cat or dog';

    }
  }
  dequeue(pref){ //return pref if it's dog or cat
    if(pref==='cat'&& this.cats.length>0){
      let foundAtIndex = this.cats.findIndex(element => element.type === 'cat'); //findIndex()Returns the index of the first element in the array where predicate is true, and -1 otherwise.
      let foundAnimal = this.cats[foundAtIndex];
      this.cats.splice(foundAtIndex, 1);
      return foundAnimal.type; // first cat is out
    }else if(pref==='dog'&& this.dogs.length>0){

      let foundAtIndex2 =this.dogs.findIndex(element => element.type === 'dog'); //findIndex()Returns the index of the first element in the array where predicate is true, and -1 otherwise.
      let foundAnimal2 = this.dogs[foundAtIndex2];
      this.dogs.splice(foundAtIndex2, 1);
      return foundAnimal2.type;// first dog is out
    }else{
      return null;
    }
  }
}

module.exports=AnimalShelter;


