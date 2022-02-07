let input = require('fs').readFileSync('stdin.txt').toString().split('\n');

let count = Number(input[0]);
let input_array = input[1].split(' ').map(x=>Number(x)) ;

var max = input_array[0];
var min = input_array[0];


for (i=1; i<=count; i++){
    if (max<input_array[i]){
        max = input_array[i]
    }
    if (min>input_array[i]){
        min = input_array[i]
    }
}
console.log(min+' '+max);