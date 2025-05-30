function logString() {
    let result = '';   
    for (var i = 0; i < arguments.length; i++) {
        result = result + arguments[i] + ' ';
    }
    console.log(result);
}


logString("Hello", 'popa', 'makaki');