//changing html content
document.getElementById("demo").innerHTML = "Hello Javascript"

//change HTML style
document.getElementById("demo").style.fontSize = "35px";

//hide html elementa
document.getElementById("hello").style.display = "none";

//show html elements
document.getElementById("hello").style.display = "block";

//Writing into an HTML element, using innerHTML.
document.getElementById("demo").innerHTML = 5 + 6;

//Writing into the HTML output using document.write().
document.write(5 + 6);

//Writing into an alert box, using window.alert().
window.alert(5 + 6);
//or
alert(5 + 6);

//Writing into the browser console, using console.log().
console.log(5 + 6);

//var-creates a variable
//let-creates a block variable

/*
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
*/

let carName = "Volve";
document.getElementById("car").innerHTML = carName;

//If you re-declare a JavaScript variable declared with var, it will not lose its value.
//The variable carName will still have the value "Volvo" after the execution of these statements:
var car = "Volvo";
var car;

//You cannot re-declare a variable declared with let or const.
/*
let cap = "car";
let cap;
*/

//JavaScript const variables must be assigned a value when they are declared:
const PI = 3.14159265359;