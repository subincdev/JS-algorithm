const input = require('fs').readFileSync('stdin.txt').toString().split('\n').map((v)=>Number(v));
const N = input.shift();
const sum = input.reduce((acc,v)=>{
    return acc += v;
})
const average = (sum/N).toFixed(0);
console.log(average);

