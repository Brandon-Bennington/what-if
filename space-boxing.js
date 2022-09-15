const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("Please enter earth weight: "));
console.log("Please the number of the planet you will be traveling to using the following system. 1-Venus 2-Mars 3-Jupiter 4-Saturn 5-Uranus 6-Neptune: ")
let planetNum = Number(prompt("= "))

console.log(weight);
console.log(planetNum)

if(planetNum === 1){
    console.log("On Venus");
    console.log(`Your weight will be: ${weight * 0.78}`)
}
if(planetNum === 2){
    console.log("On Mars");
    console.log(`Your weight will be: ${weight * 0.39}`)
}if(planetNum === 3){
    console.log("On Jupiter");
    console.log(`Your weight will be: ${weight * 2.65}`)
}if(planetNum === 4){
    console.log("On Saturn");
    console.log(`Your weight will be: ${weight * 1.17}`)
}if(planetNum === 5){
    console.log("On Uranus");
    console.log(`Your weight will be: ${weight * 1.05}`)
}if(planetNum === 6){
    console.log("On Neptune");
    console.log(`Your weight will be: ${weight * 1.23}`)
}