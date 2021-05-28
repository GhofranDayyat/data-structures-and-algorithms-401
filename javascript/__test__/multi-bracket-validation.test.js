'use strict';
const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation.js');


describe('Multi-bracket Validation',()=>{
  it('{}',()=>{
    expect(multiBracketValidation('{}')).toBeTruthy();
  });
  it('{}(){}',()=>{
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
  });
  it('()[[Extra Characters]]',()=>{
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
  });
  it('(){}[[]]',()=>{
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
  });
  it('{}{Code}[Fellows](())',()=>{
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('[({}]',()=>{
    expect(multiBracketValidation('[({}]')).toBeFalsy();
  });
  it('(](',()=>{
    expect(multiBracketValidation('(](')).toBeFalsy();
  });
  it('{(})',()=>{
    expect(multiBracketValidation('{(})')).toBeFalsy();
  });
});
