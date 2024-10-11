// Declaring and Invoking Functions
function greet(name = 'Professor') {
    return "Hey, " + name;
}

console.log(greet('Prof')); 
console.log(greet());  

// Parameters and Returning Values
function addnumbers(num1, num2) {
    return num1 + num2;
}

let result = addnumbers(8, 9);
console.log(result); 

// Function Scope
let x = 10;
 
function changeValue() {
    let x = 5
    return x;
  
}

console.log(changeValue()) // Outputs "x"


// Closures 
function outerFunction() {
    let count = 0;

    return function() {
            count++;
            return count;
            
        }
    
}
    
let countincrement = outerFunction();

console.log(countincrement()); 
console.log(countincrement()); 
console.log(countincrement()); 



