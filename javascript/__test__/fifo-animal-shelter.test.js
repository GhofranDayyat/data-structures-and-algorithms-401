'use strict';

const AnimalShelter = require('../challenges/Stack&Queue/fifoAnimalShelter/fifo-animal-shelter');



describe('Testing fifoAnimalShelter class',()=>{
  it('check the Shelter is empty',()=>{
    const newAnimal = new AnimalShelter();

    expect(newAnimal.cats).toEqual([]);
    expect(newAnimal.dogs).toEqual([]);
  });
  it('adding only cat& dogs by enqueue(animal)',()=>{
    const newAnimal = new AnimalShelter();
    newAnimal.enqueue('cat');
    newAnimal.enqueue('cat');
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog');
    newAnimal.enqueue('dog');
    expect(newAnimal.cats.length).toEqual(3);
    expect(newAnimal.dogs.length).toEqual(2);
    expect(newAnimal.enqueue('Lion')).toEqual('not a cat or dog');
  });
  it(' dequeue(pref):when no dogs or cats',()=>{
    const newAnimal = new AnimalShelter();
    expect(newAnimal.dequeue('cat')).toBeNull();
    expect(newAnimal.dequeue('dog')).toBeNull();
    expect(newAnimal.dequeue('Lion')).toBeNull();
  });
  it('return only first cat& dogs by dequeue(pref):',()=>{
    const newAnimal = new AnimalShelter();
    newAnimal.enqueue('cat');
    newAnimal.enqueue('cat');
    newAnimal.dequeue('cat');
    newAnimal.enqueue('dog');
    newAnimal.enqueue('dog');
    expect(newAnimal.cats.length).toEqual(1);
    expect(newAnimal.dequeue('cat')).toEqual('cat');
    expect(newAnimal.dequeue('dog')).toEqual('dog');
    expect(newAnimal.dogs.length).toEqual(1);
  });
});
