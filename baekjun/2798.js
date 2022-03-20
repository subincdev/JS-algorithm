const input = require('fs').readFileSync('stdin.txt').toString().split('\n');
let [num,sum] = input[0].split(' ').map((v)=>Number(v));
let arr = input[1].split(' ').map((v)=>Number(v));
let answer = 0;

const getCombinations = function(arr,selectNumber){
    const results =[];
    if (selectNumber==1){
        return arr.map((el)=>[el]);
    }
    arr.forEach((fixed,index,origin)=>{
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber-1);
        const attached = combinations.map((el)=>[fixed, ...el]);
        results.push(...attached);
    })
    return results;
}
getCombinations(arr,3).forEach((ele)=>{
    let sum2 = ele[0]+ele[1]+ele[2];
    let gap = sum-sum2;
    if (gap>=0 && answer<=sum2){
        answer=sum2;
    }
})
console.log(answer);

