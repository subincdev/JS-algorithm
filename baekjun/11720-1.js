let input = require('fs').readFileSync('stdin.txt').toString().split('\n');
let N = Number(input[0]);
let arr = input[1].split('').map(x=>Number(x));
let sum = arr.reduce((acc, v) => {
    return acc += v*1;
},0);
console.log(sum);