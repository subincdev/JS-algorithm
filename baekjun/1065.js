let input = require('fs').readFileSync('stdin.txt').toString().split('\n');
let N = Number(input[0]);

function h(n){
    let k = 0;
    for (i=1; i<=n; i++){
        let first = i%10;
        let middle=Math.floor((i%100)/10);
        let third = Math.floor((i%1000)/100);

        if (i<100){
            k++;
        }
        else if(100<=i&&i<1000){
            if (middle-first === third-middle){
                k++;
            }
        }
    }
    return k;
}
console.log(h(N));
