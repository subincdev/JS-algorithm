let input = require('fs').readFileSync('stdin.txt').toString();
let n = parseInt(input);
let i = 0;
let m = 0;
while (true) {
    let m = (n%10)*10+(parseInt(n/10)+n%10)%10;
    i++;
    if (parseInt(input) == m) {
        break;
    }
    else {
        n=m;
    }
}
console.log(i);