//what is function in jasvaScript
//A function is a block of code designed to perform a particular task. 
//It is executed when "something" invokes it (calls it).    
//Function Declaration
function greet(name) {
    return 'Hello, ' + name + '!';
}
//Function Expression
const add = function(a, b) {
    return a + b;
};
//Arrow Function
const multiply = (a, b) => a * b;
//Invoking functions
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 2)); // Output: 8
//Function with default parameters
function power(base, exponent = 2) {    
    return Math.pow(base, exponent);
}
console.log(power(3)); // Output: 9
console.log(power(2, 3));
// Output: 8
//Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30
//Higher-order function
function applyOperation(a, b, operation) {  
    return operation(a, b);
}
console.log(applyOperation(6, 3, add)); // Output: 9
console.log(applyOperation(6, 3, multiply)); // Output: 18
//Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This function runs immediately upon definition!');
})(); 
//Output: This function runs immediately upon definition!       
//Function as an object
function counter() {
    counter.count = (counter.count || 0) + 1;
    return counter.count;
}       
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3    
//Function methods: call, apply, bind
const person = {
    fullName: function(city, country) {
        return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
    }
};
const person1 = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person.fullName.call(person1, 'New York', 'USA'));
// Output: John Doe, New York, USA
console.log(person.fullName.apply(person1, ['Los Angeles', 'USA']));
// Output: John Doe, Los Angeles, USA
const boundFunction = person.fullName.bind(person1, 'Chicago', 'USA');
console.log(boundFunction()); // Output: John Doe, Chicago, USA
//Recursion example
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}   
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6 
//Closure example
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter1 = makeCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
const counter2 = makeCounter();
console.log(counter2()); // Output: 1
// Output: 1
console.log(counter1()); // Output: 3   
//Output: 3 
//Function constructor
const Person = new Function('firstName', 'lastName', `
    this.firstName = firstName; 
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
`);
const person2 = new Person('Jane', 'Smith');
console.log(person2.getFullName()); // Output: Jane Smith
//Arrow function and 'this' keyword
const obj = {
    value: 42,
    regularFunction: function() {   
        return this.value;
    },
    arrowFunction: () => {
        return this.value;
    }
};
console.log(obj.regularFunction()); // Output: 42
console.log(obj.arrowFunction()); // Output: undefined
//Output: undefined
//Callback function example
function fetchData(callback) {
    setTimeout(() => {  
        const data = 'Sample Data';
        callback(data);
    }, 1000);
}       
fetchData(function(data) {
    console.log('Received:', data);
});
// Output (after 1 second): Received: Sample Data   
//Promise example
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Sample Data from Promise';
            resolve(data);
        }, 1000);
    });
}   
fetchDataPromise().then(data => {
    console.log('Received:', data);
});
// Output (after 1 second): Received: Sample Data from Promise
// End of Function&Methods.js

//--------------------------------//
function definationExample() {
    // A function is a reusable block of code that performs a specific task.
    // It can take inputs (parameters), process them, and return an output (result).
    // Functions help in organizing code, improving readability, and avoiding repetition.
} 
// function basic syntex
function functionName(parameters) {
    // code to be executed
    return result; // optional
}   
// Calling a function
functionName(arguments);


// redudency in java script?
// Redundancy in JavaScript refers to the unnecessary repetition of code or data within a program. 
// This can lead to inefficiencies, increased maintenance efforts, and potential errors. Redundancy can occur in various forms, 
// such as duplicate functions, repeated logic, or storing the same data in multiple places. 
// To minimize redundancy, developers often use techniques like functions, loops, and data structures to encapsulate and reuse code effectively. 

// Array function syntex
//array function is a concise way to wright functions in javaScript using the arraw (=>) syntex;
const arrawFunction = (a,b) =>{
    return a+b;
}

arrawFunction(5,6);

//console.log("Hi there! This is a practice example file.");

// this is sample function 
function myfunction(){
    console.log("This is a sample function.");
}

// once function is declared we need to call it to execute
myfunction();   

// function with parameters

function operation(a,b){
    return a+b;
}

let result = operation(5,3);
console.log("sum of ${a} and ${b} is: " + result);

//--------------------------------//



const sampleFunction = () => {
    console.log("This is a sample arrow function with no parameters.");
};

sampleFunction();

// Count the vowels in a given string
/*function countVowels(str) {
    let count = 0;
    for(const strval of str){
       if(strval === 'a' || strval === 'e' || strval === 'i' || strval === 'o' || strval === 'u' || strval === 'A' || strval === 'E' || strval === 'I' || strval === 'O' || strval === 'U'){
        count++;
       }
}
return count;
}*/


const countVowels1 = (str) =>{
    let count =0;
    let vowles = 'aeiouAEIOU';
    for(const strval of str){
        if(vowles.includes(strval)){
            count++;
        }
    }
    return count;
}


// forEach method in array 
//arr.forEach(callBackFunction);
//callBack function is a function that is passed as an a  rgument  to another function and is executed after some operation is completed.

//what is highter order function?
//A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. 
//Higher-order functions are commonly used in functional programming to create more abstract and reusable code.
const fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);

});

//map method in array
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];    
const squaredNumbers = numbers.map((number) => {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//Print the squaere of a each number in the array
const number = [1,2,3,4,5,6]; 

//filter method in array
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 let arr = [,2,3,4,5,6];
 let newarr = arr.filter((val)=> {
    return val % 2 === 0;
 });
 console.log(newarr);

 //reduce method in array
 //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 