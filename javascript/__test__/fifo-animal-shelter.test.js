'use strict';

const AnimalShelter = require('../challenges/Stack&Queue/fifoAnimalShelter/fifo-animal-shelter');

const animal1 = {
  type: 'cat',
};

const animal2 = {
  type: 'cat',

};

const animal3 = {
  type: 'cat',
};


const animal5 = {
  type: 'dog',
};

const animal6 = {
  type: 'dog',
};

const animal7 = {
  type: 'dog',
};

const animal8 = {
  type: 'Lion',
};
const animal9 = {
  age: 2,
};
describe('AnimalShelter FIFO structure', () => {
  it('instantiation  is empty queues ', () => {
    const q = new AnimalShelter();
    expect(q.dogShelter.front).toEqual(null);
    expect(q.catShelter.front).toEqual(null);
  });

  it(' enqueue() any thing Other than dogs and cats', () => {
    const q = new AnimalShelter();
    expect(q.enqueue(animal8)).toEqual(`should enter 'dog' or 'cat' `);
    expect(q.enqueue(animal9)).toEqual(`should enter 'dog' or 'cat' `);

  });

  it('enqueue()  cat type to its proper queue', () => {
    const q = new AnimalShelter();
    q.enqueue(animal2);
    // enqueued animal was 'cat', dog queue should be empty
    expect(q.dogShelter.front).toEqual(null);
    expect(q.catShelter.front.value.type).toEqual('cat');
  });

  it('enqueue() dog type to its proper queue', () => {
    const q = new AnimalShelter();
    q.enqueue(animal5);
    // enqueued animal was 'dog', cat queue should be empty
    expect(q.catShelter.front).toEqual(null);
    expect(q.dogShelter.front.value.type).toEqual('dog');
  });

  it('enqueue()  multiple dog and cat types to their proper queue', () => {
    const q = new AnimalShelter();
    // front of cat queue is correct after multiple enqueues
    expect(q.catShelter.enqueue(animal1).front.value).toEqual(animal1);
    expect(q.catShelter.enqueue(animal2).front.value).toEqual(animal2);
    expect(q.catShelter.enqueue(animal3).front.value).toEqual(animal3);
    // front of cat queue is correct after multiple enqueues
    expect(q.dogShelter.enqueue(animal5).front.value).toEqual(animal5);
    expect(q.dogShelter.enqueue(animal6).front.value).toEqual(animal6);
    expect(q.dogShelter.enqueue(animal7).front.value).toEqual(animal7);
  });
  it('dequeue(pref)', () => {
    const q = new AnimalShelter();

    // cats
    q.enqueue(animal1);
    q.enqueue(animal2);
    // dogs
    q.enqueue(animal5);
    q.enqueue(animal6);


    const dequeuedCat = q.dequeue('cat');

    expect(dequeuedCat.type).toEqual('cat');
    const dequeuedDog = q.dequeue('dog');
    expect(dequeuedDog.type).toEqual('dog');
  });
});
