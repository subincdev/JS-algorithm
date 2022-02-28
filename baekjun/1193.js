let X= require('fs').readFileSync('stdin.txt');
let sum =0;
let line = 1;
while (true){
    sum+= line
    if(Number(X)<=sum){
        let a = line-(sum-Number(X));
        let b = line+1-a;
        if(line%2==0){
            console.log(a+"/"+b);
        }
        else{
            console.log(b+"/"+a);
        } 
        break;
        }
        line++;
    }
