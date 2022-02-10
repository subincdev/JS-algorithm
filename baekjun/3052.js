let input = require('fs').readFileSync('stdin.txt').toString().split('\n').map(x=>Number(x)%42);
let cnt=[];
let result=0;
for (var i=0; i<42; i++){
    let k=0;
    for (var j=0; j<10; j++)
    if (input[j] == i) {
        k++
    }
    cnt.push(k)
    if (cnt[i]>=1){
        result++;
    }
}

console.log(result);