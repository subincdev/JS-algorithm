const input= require('fs').readFileSync('stdin.txt').toString().trim();
function fibonacci (num){
    if (num<=1){
        return num;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}
console.log(fibonacci(+input));