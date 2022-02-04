let input = require('fs').readFileSync('stdin.txt').toString().split('\n');

let NX= input[0].split(' ')
let N=+NX[0];
let X=+NX[1];
let numbers = input[1].split(' ');
let answer = ""

for (let i = 0 ; i < N; i++) {
    let num = numbers[i];
    if (num < X) {
        answer += num+" "
    }
}
console.log(answer);
