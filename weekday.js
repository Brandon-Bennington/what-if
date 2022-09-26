const prompt = require('prompt-sync')({sigint: true});

let enterDay = Number(prompt("Please enter number of day: "));

console.log(enterDay);

if(enterDay <= 1){
    console.log("Monday");
}
else if(enterDay <= 2){
    console.log("Tuesday");
}else if(enterDay <= 3){
    console.log("Wednesday");
}else if(enterDay <= 4){
    console.log("Thursday");
}else if(enterDay <= 5){
    console.log("Friday");
}else if(enterDay <= 6){
    console.log("Saturday");
}else if(enterDay <= 7){
    console.log("Sunday");
}else if(enterDay >= 8){
    console.log("error");
}