function solution(n){
    const answer=String(n).split('').reduce((acc,cur)=> Number(acc)+Number(cur),0)
    return answer;
}
let a1 =[];
let a2=[];
for (let i=1; i<=10000; i++){
    a1.push(i);
    a2.push(i+solution(i));
}
let a3 = a1.filter(x=> !a2.includes(x));

for (let i=0; i<a3.length; i++){
    console.log(a3[i]);
}
