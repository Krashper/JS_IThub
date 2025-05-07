let temp = 1; 
let weather = "clear"; 

if (temp >= 25 && weather == "clear") {
    activity = "golf"; 
} else if ((temp >= 10 && temp <= 24) || weather == "cloudy") {
    activity = "bowling"; 
} else {
    activity = "hiking";
}

console.log(`Активность: ${activity}`)
