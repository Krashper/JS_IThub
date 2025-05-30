function sumElems(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const num = Number(array[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}

let array = ['10','Строка','5g','15','05']
let result = sumElems(array)
console.log(result)