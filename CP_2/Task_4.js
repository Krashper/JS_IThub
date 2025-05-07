let num = 4;
let result = 0;
let factorial;

for(let i = 1; i <= num; i++){
    factorial = 1;
    for(let j = 1; j <= i; j++){
        factorial *= j;
    }
    result += factorial;
}
console.log(result);