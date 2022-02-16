let input = require('fs').readFileSync('stdin.txt').toString().split('\n');
let N = Number(input[0]);
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let num = [0,1,2,3,4,5,6,7,8,9]
if (upperCase.indexOf(input[0]) != -1){
    let ascii = Number(upperCase.indexOf(input[0]));
    console.log(65+ascii);
}
else if (lowerCase.indexOf(input[0]) != -1){
    let ascii = Number(lowerCase.indexOf(input[0]));
    console.log(97+ascii);
}
else if (num.indexOf(N) != -1){
    let ascii = Number(num.indexOf(N));
    console.log(48+ascii);
}