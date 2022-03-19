const input=require('fs').readFileSync('stdin.txt').toString().trim();
const N=+input;
let count=0;
let answer=[];

//num: 원반의 개수
//from:출발지 기둥 번호
//to: 목적지 기둥 번호
//other: 나머지 기둥 번호
function hanoi(num,from,other,to){
    if(num==0){
        return;
    }
    else{
        hanoi(num-1,from,to,other);
        answer.push([from,to]);
        count++;
        hanoi(num-1,other,from,to);
    }
}
hanoi(N,'1','2','3');
console.log(count);
console.log(answer.map((ele)=>ele.join(" ")).join("\n"));