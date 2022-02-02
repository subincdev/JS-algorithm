let input = Number(require('fs').readFileSync('stdin.txt'));


for (let i = 0; i <input; i++) {
    let stars = ""
    let blank = ""
    for (let k=input; k>i+1; k--){
        blank += " ";
    }
    for (let j=0; j<=i; j++){
        stars += "*";
    }
    console.log(blank+stars);
}
