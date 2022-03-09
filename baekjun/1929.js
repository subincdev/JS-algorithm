const input= require('fs').readFileSync('stdin.txt').toString().trim().split(' ');
const arr=[];
for (let i=Number(input[0]); i<Number(input[1]); i++){
    let cnt=0;
        for (let j=2; j<i; j++){
           if(i%j==0){
            cnt++;
           }
        }
    if (cnt==0){
        arr.push(i);
    }
 }
arr.forEach((v) => console.log(v));