const input= require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
const reducer = (acc, cur) => acc + cur;
let arr= [];
for (let i=+input[0]; i<=+input[1]; i++){
    let cnt=0;
    for (let j=1; j<=i; j++){
        if(i%j==0){
            cnt++;
        }
    }
    if(cnt>1&&cnt<=2){
        arr.push(i);
    }
}
console.log(arr.length>=1?arr.reduce(reducer)+"\n"+arr[0]:-1);



