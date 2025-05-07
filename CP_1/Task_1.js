let price = 5000;
let range = "month";

switch (range) {
    case "month":  
        trans = "месяц";
        break;
    case "day":       
        trans = "день";
        break;
    case "week":     
        trans = "неделю";
        break;
    default:
        trans = "неизвестный диапазон";
}

const finish = `${price} в ${trans}`;
console.log(finish);
