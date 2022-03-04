const input= require('fs').readFileSync('stdin.txt').toString().trim();
let num = +input;
let cnt=0;
while (num>0){
    if (num%5 == 0){
        num=num-5;
        cnt ++;
    }
    else if (num %3 == 0){
        num=num-3;
        cnt++;
    }
    else if (num>5){
        num=num-5
        cnt++
    }
    else {
        cnt=-1;
        break;
    }
}
console.log(cnt);