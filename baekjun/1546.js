let input = require('fs').readFileSync('stdin.txt').toString().split('\n');
let N = Number(input[0]);
let grade = [...input[1].split(' ')].map(x=>Number(x));

let m = grade[0];
for (var i=0; i<N; i++){
    if (m<grade[i]){
        m=grade[i]
    }
}
let sum =0;

for (var i=0; i<N; i++){
    sum += grade[i]/m*100;
}
console.log(sum/N);