//// Day 26

import { log } from "console";

/// Question # 76

function numberAdd(num1: number, num2: number){
    return num1 + num2
}
console.log(numberAdd(10,20));

/// Question # 77

function greetUser(name: string = "anonymous") {
    console.log(`Hello, ${name}!`);
}

greetUser("Alice"); // Outputs: Hello, Alice!
greetUser(); // Outputs: Hello, anonymous!


/// Question # 78

// Function declaration for squaring a number

function squareDecleration(numb1:number,){
    return numb1 * numb1
}
 const squareExpression= function(val1:number){
    return val1 * val1

 }
 console.log(squareDecleration(4));
 console.log(squareExpression(4));
 
 /// Day 27

 /// Question # 79

 // This sets up an object for a car with specific details
let car = {
    make:"honda",
    model: "civic",
    year: 2016
}
 console.log(car.model);
 
 
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


//// Day 28
//// Question # 82

function stringLenght(stl: string){
return stl.length    
}
console.log(stringLenght('i am very happy to getting admission in Governor house IT'));


//// Question # 83

// This function changes a string to uppercase and then to lowercase
function convertCase(str: string) {
    let upperStr = str.toUpperCase(); // Converts to uppercase
    let lowerStr = str.toLowerCase(); // Converts to lowercase

    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}

convertCase("Hello World"); 


////// Question # 84

function replaceJavascriptintoTypescript(sentnce: string){
    return sentnce.replace(/Javascript/g, "Typescript");
}
console.log(replaceJavascriptintoTypescript('i love Javascript and Javascript is an awesome langauge'));


/// Day 29

/// Question # 85

function findcode(codestring: string){
    return codestring.indexOf("Code")
}
console.log(findcode("Learn to Code with Typescript"));


/// Question # 86

function checkJavascript(java: string): boolean{
    return java.includes("Javascript")
}
console.log(checkJavascript("i love python but Javascript is also best langauge"));


/// Question # 87

function extract(demostarte: string){
    return demostarte.substring(0, 10);
}
console.log(extract("When i start learning about code, that time i have no idea about typescript"));


////Day 30

//// Question # 88

function decimal(decc:number){
    return Math.round(decc);
}
console.log(decimal(4.8));
console.log(decimal(10.6));


//// Question # 89

function stringconverttoNumber(ston:string = "1234"){
    return parseInt(ston)
}
console.log(stringconverttoNumber);
console.log(stringconverttoNumber("3243"));


//// Question # 90

function checkNan(qadeer: any): boolean {
    return isNaN(qadeer);
}
console.log(checkNan("Qadeer Afridi"));
console.log(checkNan(3548));



