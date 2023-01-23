// array of random numbers between 0 and 100
const array = Array(100).fill().map(() => Math.floor(100 * Math.random()));
console.log(array);