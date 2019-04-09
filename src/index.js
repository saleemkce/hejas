const defaultAwesomeFunction = (name) => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

/**
 * function for add operation
 * @param {*} a parameter 1 for add function
 * @param {*} b parameter 2 for add function
 */
const _add = (a, b) => {
  return (a + b);
};

/**
 * function for subtract operation
 * @param {*} a parameter 1 for subtract function
 * @param {*} b parameter 2 for subtract function
 * note: It will not return back negative values forever.....
 */
const _subtract = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Input is not a number');
  }
  const arr = [a, b];
  const max = arr.reduce(function(a, b) { return Math.max(a, b); });
  const min = arr.reduce(function(a, b) { return Math.min(a, b); });
  return (max - min);
};

const _multiply = (a, b) => {
  return (a * b);
};

const _divide = (a, b) => {
  return (a / b);
};

const _modulo = (a, b) => {
  return (a % b);
};

export default defaultAwesomeFunction;

export { awesomeFunction, _add, _subtract, _divide, _multiply, _modulo };
