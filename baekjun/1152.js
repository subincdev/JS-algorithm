let input = require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
console.log(input[0]);
let charNum = input[0].split(' ');
console.log(charNum.length);