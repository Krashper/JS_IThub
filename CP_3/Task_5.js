function checkElem(array, callback_func) {
    for (let elem of array) {
        if (callback_func(elem)) {
            return true;
        }
    }
    return false;
}

let array = [1, 2, 3, 4];
let result = checkElem(array, (elem) => elem == 3 );
console.log(result);