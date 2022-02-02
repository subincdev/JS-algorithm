let input = Number(require('fs').readFileSync('stdin.txt'));

let stars = ""
let blank = ""

for (let i = 1; i <= input; i++) {
    for (let j=1; j<=i; j++){
        stars += "*"
        blank +=" "
    }
    blank+=stars+"\n"
}
console.log(blank);
