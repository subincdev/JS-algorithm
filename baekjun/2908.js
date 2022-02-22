let input = require('fs').readFileSync('stdin.txt').toString().trim().split(' ');
let num1 = input[0].split('');
let num2 = input[1].split('');
let max = 0;
let i = 2;
while (i>=0) {
    if (Number(num1[i]) > Number(num2[i])){
        max=num1;
        break;
    }
    else if (Number(num1[i])<Number(num2[i])){
        max=num2;
        break;
    }
    else if (Number(num1[i])==Number(num2[i])){
        i--;
    }
}

console.log(max.reverse().join(''));

