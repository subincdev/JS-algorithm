let input= require('fs').readFileSync('stdin.txt').toString().trim().split(' ');
const [A,B,C]= input.map(v=>Number(v));

const margin = C-B;
const answer = Math.floor(A/margin)+1;

console.log(margin <= 0? -1 : answer);



