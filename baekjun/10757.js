const input= require('fs').readFileSync('stdin.txt').toString().trim().split(' ');
let A = BigInt(input[0]);
let B = BigInt(input[1]);
let sum = A+B;
console.log(sum.toString());