let input = require('fs').readFileSync('stdin.txt').toString().split('\n').map(x=>Number(x));
let temp = input[0];

for (i=1; i<9; i++) {
    if (temp<input[i]){
        temp=input[i]
    }
}

for(i=0; i<10; i++){
    if(temp==input[i]){
        console.log(`${temp}
${i+1}`);
    }
}