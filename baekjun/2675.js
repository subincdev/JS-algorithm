let input = require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
let testCase = Number(input[0]);
let stringArr = [];
let repeatNum = [];
for (i=0; i<testCase; i++){
    stringArr[i] = input[i+1].split(' ');
    repeatNum[i] = stringArr[i].shift();
    let stringChar = stringArr[i].toString().split('');
    let answer = [];
    for (j=0; j<stringChar.length; j++){
        answer.push(stringChar[j].repeat(repeatNum[i]));
    }
    console.log(answer.join(''))
}

