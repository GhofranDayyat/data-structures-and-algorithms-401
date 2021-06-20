'use strict';

const repeatedWord =require('../challenges/hashtable/repeatedWord/repeated-word');

describe('Testing repeatedWord function',()=>{
  it('find first unique char',()=>{
    let arr = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(arr)).toEqual('a');
  });

  it('find first unique char  ',()=>{
    let arr = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(arr)).toEqual('it');
  });

  it('unsensitive case ',()=>{
    let arr = 'G hofran dayyat suleiman ahmad ghofran g ';
    expect(repeatedWord(arr)).toEqual('g');
  });

  it('find first unique word',()=>{
    let arr = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(arr)).toEqual('summer');
  });

  it('No Repeated Word',()=>{
    let arr = 'It was a queer, sultry ,  summer they electrocuted the Rosenbergs';
    expect(repeatedWord(arr)).toEqual('No Repeated Word');
  });
});
