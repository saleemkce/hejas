import { assert } from 'chai';
import defaultAwesomeFunction, { awesomeFunction, add, subtract, multiply, divide, modulo } from '../src';

describe('Awesome test.', () => {
  it('should test default awesome function', () => {
    const expectedVal = 'I am the Default Awesome Function, fellow comrade! - Dinesh'
    assert(defaultAwesomeFunction('Dinesh') === expectedVal, 'Default not awesome :(');
  });

  it('should test awesome function', () => {
    const expectedVal = 'I am just an Awesome Function'
    assert(awesomeFunction() === expectedVal, 'Named awesome :(');
  });

  it('should test add function', () => {
    const expectedVal = 20;
    assert(add(10, 10) === expectedVal, '* add funtcion :(');
  });

  it('should test subtract function', () => {
    const expectedVal = 5;
    const invalidInput = 'Input is not number';
    assert(subtract('test', 'well') === invalidInput, '* subtract function check invalid input :(');
    assert(subtract(5, 10) === expectedVal, '* subtract function success :(');
  });

  it('should test multiply function', () => {
    const expectedVal = 100;
    assert(multiply(10, 10) === expectedVal, '* multiply funtcion :(');
  });

  it('should test divide function', () => {
    const expectedVal = 10;
    assert(divide(100, 10) === expectedVal, '* divide funtcion :(');
  });

  it('should test modulo function', () => {
    const expectedVal = 0;
    assert(modulo(100, 5) === expectedVal, '* modulo funtcion :(');
  });
});
