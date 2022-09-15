const prompt = require('prompt-sync')({sigint: true});

let enterNum = Number(prompt("Please enter number: "));

console.log(enterNum);

if(enterNum % 15 == 0){
    console.log("fizzbuzz")
}
else if (enterNum % 3 == 0){
    console.log("fizz")
}
else if(enterNum % 5 == 0){
    console.log("buzz")
}
