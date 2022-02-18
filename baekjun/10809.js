let S = require('fs').readFileSync('stdin.txt').toString().trim().split('');
let arr = 'abcdefghijklmnopqrstuvwxyz';
let answer = [];
for (i=0; i<arr.length; i++){
    answer.push(((S.includes(arr.charAt(i)))? S.indexOf(arr.charAt(i)) : -1));
}
console.log(answer.join(' '));

