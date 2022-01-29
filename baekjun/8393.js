const fs = require('fs');
let input = fs.readFileSync('stdin.txt').toString().split('/n');
const N = +input[0];
var sum= 0;
for (let i=1; i<N+1; i++){
    sum=sum+i;
}
console.log(sum);