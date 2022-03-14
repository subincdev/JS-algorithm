const r= Number(require('fs').readFileSync('stdin.txt').toString().trim());
console.log(r*r*Math.PI);
console.log(2*r*r);