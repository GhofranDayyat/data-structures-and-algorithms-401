'use strict';
const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class AnimalShelter {

  constructor() {
    this.dogShelter = new Queue();
    this.catShelter = new Queue();
  }

  enqueue(animal) {

    if (!animal.type || (animal.type !== 'dog' && animal.type !== 'cat')) return `should enter 'dog' or 'cat' `;

    if (animal.type === 'dog') {
      this.dogShelter.enqueue(animal);
      return this.front;
    }

    if (animal.type === 'cat') {
      this.catShelter.enqueue(animal);
      return this.front;

    }
  }

  dequeue(pref) {

    if (pref === 'dog') {
      return this.dogShelter.dequeue();
    }

    if (pref === 'cat') {
      return this.catShelter.dequeue();
    }
  }}
module.exports=AnimalShelter;


