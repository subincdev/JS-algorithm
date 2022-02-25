let input = require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
let testCase = +input.shift();

function solution(N,input){
    let count = 0;
    for (let i=0; i<testCase; i++){
        let word = input[i];
        let isgroupWord = true;
        let str= '';
        for (let j=0; j<word.length; j++){
            if (!str.includes(word[j])){
                str += word[j];
            }else {
                if (str.indexOf(word[j]) !== str.length-1){
                    isgroupWord = false;
                    break;
                }
            }
        }
        if (isgroupWord){
            count++;
        }
    }
    return count;
}

console.log(solution(testCase, input));