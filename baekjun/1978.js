const input= require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
let testCase = +input[0];
let nums = input[1].split(' ').map(v=>Number(v));
for(let i=0; i<+input[0]; i++){
    let cnt = 0;
    for (let j=1; j<=nums[i]; j++){
       if(nums[i]%j==0){
        cnt++;
       }
    }
    if (cnt>2){
        testCase-=1;
    }
    if (nums[i]==1){
        testCase-=1;
    }
}
console.log(testCase);
