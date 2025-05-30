function changeElem(array, n) {
    let changedArray = [];
    for (let i = 0; i < array.length; i++) {
        changedArray.push(array[i] * n);
    }
    return changedArray;
}

let array = [2, 3, 4, 5];
let result = changeElem(array, 2);
console.log(result);
console.log(array);