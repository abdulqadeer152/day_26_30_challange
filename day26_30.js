"use strict";
//// Day 26
Object.defineProperty(exports, "__esModule", { value: true });
/// Question # 76
function numberAdd(num1, num2) {
    return num1 + num2;
}
console.log(numberAdd(10, 20));
/// Question # 77
function greetUser(name = "anonymous") {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice"); // Outputs: Hello, Alice!
greetUser(); // Outputs: Hello, anonymous!
/// Question # 78
// Function declaration for squaring a number
function squareDecleration(numb1) {
    return numb1 * numb1;
}
const squareExpression = function (val1) {
    return val1 * val1;
};
console.log(squareDecleration(4));
console.log(squareExpression(4));
/// Day 27
/// Question # 79
// This sets up an object for a car with specific details
let car = {
    make: "honda",
    model: "civic",
    year: 2016
};
console.log(car.model);
/*

///// Question # 80

// Starting with our car object
// Starting with our car object
let Car = {
   make: "Toyota",
   model: "Corolla",
   year: 2020,
   color: ""

};

Car.color = "blue"; // Adds a new property 'color'
Car.year = 2021; // Updates the 'year' property

// Showing the updated car object
console.log(Car); // Outputs the car object with the new color and updated year



//// Question # 81

function objectproperty(obj: object){
   for(let property in obj){
       console.log(`${property}: ${obj[property]}`);
       
   }
}

objectproperty({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });

*/
//// Day 28
//// Question # 82
function stringLenght(stl) {
    return stl.length;
}
console.log(stringLenght('i am very happy to getting admission in Governor house IT'));
//// Question # 83
// This function changes a string to uppercase and then to lowercase
function convertCase(str) {
    let upperStr = str.toUpperCase(); // Converts to uppercase
    let lowerStr = str.toLowerCase(); // Converts to lowercase
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
convertCase("Hello World");
////// Question # 84
function replaceJavascriptintoTypescript(sentnce) {
    return sentnce.replace(/Javascript/g, "Typescript");
}
console.log(replaceJavascriptintoTypescript('i love Javascript and Javascript is an awesome langauge'));
/// Day 29
/// Question # 85
function findcode(codestring) {
    return codestring.indexOf("Code");
}
console.log(findcode("Learn to Code with Typescript"));
