const input= require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
const testCase = input.shift();
for (let i=0; i<testCase; i++){
    const [x1,y1,r1,x2,y2,r2]=input[i].split(' ').map(v=>Number(v));
    var distance = Math.sqrt((x1-x2)**2+(y1-y2)**2);
    var rsum = r1+r2;
    var rsub = Math.abs(r1-r2)

    if(distance==0 && rsub==0){
        console.log(-1);
    }
    else if(distance>rsum || distance<rsub){
        console.log(0);
    }
    else if(distance==rsum || distance==rsub){
        console.log(1)
    }
    else if( distance<rsum&&distance>rsub){
        console.log(2);
    }
}
