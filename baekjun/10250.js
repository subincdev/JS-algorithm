let input= require('fs').readFileSync('stdin.txt').toString().trim().split('\n');
let testCase = input.shift();
function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
      for (var i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
  }
  
for (let i=0; i<testCase; i++){
    let arr = input[i].split(' ');
    let H = arr[0];
    let W = arr[1];
    let N = arr[2];
    let roomNum = Math.ceil(N/H);
    let floor = (N%H);
    if (roomNum>W){
        floor += 1;
        roomNum = (roomNum-W);
    }
    if (floor==0){
        floor = H;
    }
    console.log(floor.toString()+leadingZeros(roomNum,2).toString());
}
