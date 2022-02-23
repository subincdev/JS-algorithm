let input = require('fs').readFileSync('stdin.txt').toString().trim().split('');
let arr = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
let sum = 0;
for (let i=0; i<input.length; i++){
    for (let j=0; j<arr.length; j++){
        let arr2 = arr[j].split('');
        sum = arr2.includes(input[i])? sum+j+3 : sum+0 ; 
    }
}
console.log(sum);