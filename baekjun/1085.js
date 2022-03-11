const input= require('fs').readFileSync('stdin.txt').toString().trim().split(' ').map(v=>Number(v));
const [x,y,w,h]=input;
if  (w-x > h-y){
    if (h-y > y){
        console.log( x > y? y : x);
    }else if (h-y > x){
        console.log( y > x? x: y);
    }
    else {
        console.log( h-y);
    }
    }
else {
    if ( w-x > y){
        console.log( x > y? y : x);
    }else if (w-x > x){
            console.log( y > x? x: y);
        }
        else {
            console.log( w-x);
        }
    }