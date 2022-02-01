let input = require('fs').readFileSync('stdin.txt').toString().split('\n');

let answer = '';

for (let i = 1; i <= input[0]; i++) {
    let num = input[i].split(' ');
    answer += `Case #${i}: ${Number(num[0]) + Number(num[1])}\n`;
}
console.log(answer);
