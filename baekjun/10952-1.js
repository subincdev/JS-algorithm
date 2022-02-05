let input = require('fs').readFileSync('stdin.txt').toString().trim().split('\n');

for (i=0; i<input.length-1 ; i++) {
    arr=input[i].split(' ');
    console.log(Number(arr[0])+Number(arr[1]));
}
