let input = Number(require('fs').readFileSync('stdin.txt').toString());

let answer = "";
for (let i=1; i<input+1; i++){
    answer+=i+"\n";
}
console.log(answer);