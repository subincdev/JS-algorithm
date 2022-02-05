let input = require('fs').readFileSync('stdin.txt').toString().trim().split('\n');

let i =0;

while (i<input.length-1) {
    let A = parseInt(input[i].split(' ')[0]);
    let B = parseInt(input[i].split(' ')[1]);
    result=A+B;
    if (result==0) {
        break;
    }
    else {
        console.log(result);
    }
    i++;
}