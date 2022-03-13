const input= require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
for  (let i=0; i<input.length-1; i++){
    let arr=input[i].split(' ').map(v=>Number(v));
    arr.sort(function(a,b){
        return a-b;
    });
    console.log(arr[2]**2 === (arr[0]**2)+(arr[1]**2) ? "right" : "wrong");
}