let text = require('fs').readFileSync('stdin.txt').toString().trim().toUpperCase();
let upperArray = text.split('');
let countNum = [];
//중복제거함수
const newArray = upperArray.filter((ele,idx)=>{
    return upperArray.indexOf(ele) === idx}
);
//각 요소의 갯수 세어준 배열 만들기
for (let i=0; i<newArray.length; i++){
    var count = 0;
    var searchChar = newArray[i];
    var pos = text.indexOf(searchChar);
    while (pos != -1){
        count ++;
        pos = text.indexOf(searchChar, pos + 1);
    }
    countNum.push(count);
}

//배열에서 가장 큰 값의 인덱스를 찾아 newArray[해당인덱스] 출력해주기
function solution (arr){
    let answer = "?"
    let max = arr[0];
    let maxIndex = 0;
    if (arr.length = 1){
        return newArray[maxIndex];
    }
    else {
        for (let i=1; i<arr.length; i++){
            if (max == arr[i]){
                return answer
            }
            if (max < arr[i]){
                max = arr[i]
                maxIndex = i;
            }
        }
        return newArray[maxIndex];
    }
}

console.log(solution(countNum));


