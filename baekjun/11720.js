let input = require('fs').readFileSync('stdin.txt').toString().split('\n');
let N = Number(input[0]);
let arr = input[1].split('').map(x=>Number(x));
let sum=0;
for (i=0; i<N; i++){
    sum += arr[i];
}
console.log(sum);