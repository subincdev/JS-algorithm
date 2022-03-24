const input = require('fs').readFileSync('stdin.txt').toString().split('\n');
const N = +input.shift();
let student =[];
let rank=[];
for(let i=0; i<N; i++){
    student[i]=input[i].split(' ').map((v)=>Number(v));
}

for (let i=0; i<N; i++){
    let num=1;
    for (let j=0; j<N; j++){
        if ( student[i][0] < student[j][0] && student[i][1] < student[j][1]){
            num++;
        } 
    }
    rank.push(num);
}
console.log(rank.join(' '));