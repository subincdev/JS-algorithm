let input = Number(require('fs').readFileSync('stdin.txt').toString());

let answer = "";
for (i = input; i > 0; i--) {
    answer += i + "\n"
}
console.log(answer);