let word = "Арнольд";
let result = "";

for(let i = 0; i < word.length; i++){
    if (word[i].toLowerCase() != "а" && word[i].toLowerCase() != "о") result += word[i];
}
console.log(result);