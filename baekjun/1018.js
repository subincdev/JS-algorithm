const input = require('fs').readFileSync('stdin.txt').toString().split('\n');
[size,...arr]=input;
[row,col] =size.split(' ');
arr = arr.map(str=>str.trim('\r').split(''));
const chess =['WBWBWBWB', 'BWBWBWBW'];
var answer =[];
for(let i=0; i<=row-8; i++){
    for (let j=0; j<=col-8; j++){
        for (let z=0; z<2; z++){
            let count=0;
            for(let x=0; x<8; x++){
                for (let y=0; y<8; y++){
                    const current = arr[i+x][j+y];
                    if (current !== chess[(x+z)%2][y]){
                        count++;
                    }
                }
            }
            answer.push(count);
        }
    }
}
console.log(Math.min(...answer));
