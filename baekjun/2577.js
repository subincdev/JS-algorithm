let input = require('fs').readFileSync('stdin.txt').toString().split('\n').map(x=>Number(x));
let multiply = input[0]*input[1]*input[2];
let multiply__arr = multiply.toString().split('')
for (i=0; i<10; i++){
    let k=0;
    for (j=0; j<multiply__arr.length; j++){
        if (i==parseInt(multiply__arr[j])){
            k++
        }
    }
    console.log(k);
}