const input = require('fs').readFileSync('stdin.txt').toString()
const N = Number(input);
let start = N - (String(N).length * 9);
let M = start;
let answer;
while(true){
    M++;
    let sum = M;
    for(let i = 0; i < String(M).length; i++){
        sum = sum + Number(String(M).charAt(i));
    }
    if(sum === N){
        answer = M;
        break;
    }
    if(M >= N){
        answer = 0;
        break;
    }
}
console.log(answer);