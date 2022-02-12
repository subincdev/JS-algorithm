let input = require('fs').readFileSync('stdin.txt').toString().split('\n');
let N = Number(input[0]);
let arr = [];
for (var i=0; i<N; i++){
    arr[i]= input[i+1].split('X').filter(function(item) {
        return item !== '';
    });
}
for (var i=0; i<N; i++){
    let result =0;
    for (var j=0; j<arr[i].length; j++){
        let num = arr[i][j].length;
        result+= num*(num+1)/2;
    }
    console.log(result);
}