let input= require('fs').readFileSync('stdin.txt');
let range=1;
let block=1;

while (block<input){
    block +=6*range;
    range++;
}
console.log(range);
