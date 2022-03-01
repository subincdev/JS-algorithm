let input= require('fs').readFileSync('stdin.txt').toString().trim().split(' ');
let A = input[0];
let B = input[1];
let V = input[2];
let day = Math.ceil((V-B)/(A-B));
console.log(day);