const input= require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
let x_arr = [];
let y_arr=[];
for (let i=0; i<input.length; i++){
    const [x,y] = input[i].split(' ');
    x_arr.push(x);
    y_arr.push(y);
}
let x_filtered = [];
let y_filtered = [];
for (let i=0; i<x_arr.length; i++){
    if (x_arr.lastIndexOf(x_arr[i]) !== i){
        x_filtered = x_arr.filter((ele)=>ele !== x_arr[i])
    }
    if (y_arr.lastIndexOf(y_arr[i]) !== i){
        y_filtered = y_arr.filter((ele)=>ele !== y_arr[i])
    }
}
console.log(x_filtered[0]+' '+y_filtered[0]);
