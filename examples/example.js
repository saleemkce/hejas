/* eslint-disable no-console */
const defaultAwesomeFunction = require('../lib').default;
const { awesomeFunction, _add } = require('../lib');

const defaultVal = defaultAwesomeFunction('Dinesh');
const val = awesomeFunction();

// defaultVal === 'I am the Default Awesome Function, fellow comrade! - Dinesh'
console.log(defaultVal);
// val === 'I am just an Awesome Function'
console.log(val);

console.log('Addition of (10, 10) is : ' + _add(10,10));
