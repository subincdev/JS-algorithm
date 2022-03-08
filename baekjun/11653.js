const input= require('fs').readFileSync('stdin.txt').toString();
let N = +input;
let i=2;
while(N>1){
    if(N%i==0){
        console.log(i);
        N=N/i;
    }
    else {
        i++;
    }
}
