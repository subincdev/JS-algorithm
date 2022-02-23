let str = require('fs').readFileSync('stdin.txt').toString().trim();
let char = ['c=','c-','dz=','d-','lj','nj','s=','z='];
for (let ele of char ){
    str = str.split(ele).join('*')
}
console.log(str.length);