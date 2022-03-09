const input= require('fs').readFileSync('stdin.txt').toString().trim().split('\n');

for (let i=0; i<input.length-1; i++){
    let answer = [];
    let a =[];
    const Number = +input[i];
    for(let j=2; j<=Number*2; j++){
        a[j]=j;
    }
    for (let j=2; j<=Number*2; j++){
        if(a[j]==0){
            continue;
        }
        for(let k=2*j; k<=Number*2; k+=j){
            a[k]=0;
        }
    } 
    for(let j=Number+1; j<=Number*2; j++){
        if(a[j]!=0){
            answer.push(a[j]);
        }
    }
    console.log(answer.length);
}


