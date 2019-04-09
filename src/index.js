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
const add = (a, b) => (a + b);

/**
 * function for subtract operation
 * @param {*} a parameter 1 for subtract function
 * @param {*} b parameter 2 for subtract function
 * note: It will not return back negative values forever.....
 */
const subtract = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Input is not number';
  }
  const arr = [a, b];
  const max = arr.reduce((_a, _b) => Math.max(_a, _b));
  const min = arr.reduce((_a1, _b1) => Math.min(_a1, _b1));
  return (max - min);
};

const multiply = (a, b) => (a * b);

const divide = (a, b) => (a / b);

const modulo = (a, b) => (a % b);

export default defaultAwesomeFunction;

export { awesomeFunction, add, subtract, divide, multiply, modulo };
