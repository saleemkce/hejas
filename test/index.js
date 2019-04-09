import { assert } from 'chai';
import defaultAwesomeFunction, { awesomeFunction, _add, _subtract, _multiply, _divide, _modulo } from '../src';

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
    assert(_add(10, 10) === expectedVal, '* add funtcion :(');
  });

  it('should test subtract function', () => {
    const expectedVal = 5;
    assert(_subtract(5, 10) === expectedVal, '* subtract function :(');
  });
});
