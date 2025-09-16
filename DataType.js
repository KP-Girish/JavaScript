//what is data types
//Data types in JavaScript define the type of data that can be stored and manipulated within a program. JavaScript has several built-in data types, which can be categorized into primitive and non-primitive types.    
//Primitive Data Types
//1. Number: Represents both integer and floating-point numbers.
let num = 42;
console.log("Number: " + num);
//2. String: Represents a sequence of characters enclosed in single or double quotes.
let str = "Hello, World!";  
console.log("String: " + str);
//3. Boolean: Represents a logical entity that can have two values: true or false.
let bool = true;
console.log("Boolean: " + bool);
//4. Undefined: Represents a variable that has been declared but not assigned a value.
let undef;
console.log("Undefined: " + undef);
//5. Null: Represents the intentional absence of any object value.
let nullVar = null;
console.log("Null: " + nullVar);
//6. Symbol: Represents a unique and immutable identifier, often used as object property keys.
let sym = Symbol("unique");
console.log("Symbol: " + sym.toString());
//7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers.
let bigInt = BigInt(9007199254740991);
console.log("BigInt: " + bigInt);
//Non-Primitive Data Types
//1. Object: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
let obj = { name: "Alice", age: 25 };
console.log("Object: " + JSON.stringify(obj));
//2. Array: Represents an ordered list of values, which can be of any data type.
let arr = [1, 2, 3, "four", true];
console.log("Array: " + arr.join(", "));
//3. Function: Represents a reusable block of code that can be executed when called.
function greet(name) {  
    return `Hello, ${name}!`;
}   
console.log(greet("Bob"));
//Dynamic Typing
//JavaScript is a dynamically typed language, meaning that variables can hold values of any data type, and the type can change at runtime.
let dynamicType = 10; // Initially a number
console.log("Dynamic Type (number): " + dynamicType);
dynamicType = "Now I'm a string"; // Now a string
console.log("Dynamic Type (string): " + dynamicType);
dynamicType = true; // Now a boolean
console.log("Dynamic Type (boolean): " + dynamicType);  
//Type Coercion
//JavaScript performs type coercion, which means it automatically converts values from one data type to another when necessary, such as during operations involving different types.
let coercedValue = "5" + 10; // String concatenation
console.log("Coerced Value (string + number): " + coercedValue);
coercedValue = "5" * 2; // Numeric multiplication
console.log("Coerced Value (string * number): " + coercedValue);
//Type Checking
//You can check the data type of a variable using the typeof operator.
console.log("Type of num: " + typeof num); // number
console.log("Type of str: " + typeof str); // string
console.log("Type of bool: " + typeof bool); // boolean
console.log("Type of undef: " + typeof undef); // undefined
console.log("Type of nullVar: " + typeof nullVar); // object (this is a known quirk in JavaScript)
console.log("Type of sym: " + typeof sym); // symbol
console.log("Type of bigInt: " + typeof bigInt); // bigint
console.log("Type of obj: " + typeof obj); // object
console.log("Type of arr: " + typeof arr); // object
console.log("Type of greet: " + typeof greet); // function
//Type Conversion
//You can explicitly convert values from one data type to another using functions like Number(), String(), and Boolean().       
let strToNum = Number("123");
console.log("String to Number: " + strToNum);
let numToStr = String(456);
console.log("Number to String: " + numToStr);
let valueToBool = Boolean(1);
console.log("Value to Boolean: " + valueToBool);
let zeroToBool = Boolean(0);
console.log("Zero to Boolean: " + zeroToBool);
//Type Safety
//While JavaScript is dynamically typed, it's important to write type-safe code to avoid unexpected behaviors. Using tools like TypeScript can help enforce type safety in your codebase.
//TypeScript is a superset of JavaScript that adds static typing to the language, allowing developers to define types for variables, function parameters, and return values. This helps catch type-related errors during development rather than at runtime.
//Example of TypeScript
//let typedVar: number = 10; // typedVar can only hold number values
//typedVar = "This will cause a type error"; // Error: Type 'string' is not assignable to type 'number'
//In summary, understanding data types in JavaScript is crucial for writing effective and bug-free code. By being aware of the different data types, how they interact, and best practices for type safety, you can improve the quality and maintainability of your code.
//let var and const scope
function scopeTest() {
    if (true) {
        var functionScopedVar = "I'm function scoped (var)";
        let blockScopedLet = "I'm block scoped (let)";
        const blockScopedConst = "I'm block scoped (const)";
        console.log(functionScopedVar); // Accessible here
        console.log(blockScopedLet); // Accessible here
        console.log(blockScopedConst); // Accessible here
    }
    console.log(functionScopedVar); // Accessible here (var is function-scoped)
    //console.log(blockScopedLet); // This line would cause an error (let is block-scoped)
    //console.log(blockScopedConst); // This line would cause an error (const is block-scoped)
}   
scopeTest();
//console.log(functionScopedVar); // This line would cause an error (var is not accessible outside the function)
//console.log(blockScopedLet); // This line would cause an error (let is not accessible outside the block)
//console.log(blockScopedConst); // This line would cause an error (const is not accessible outside the block)


//ES6 features
//ES6 (ECMAScript 2015) introduced several new features to JavaScript, including let and const for variable declarations, arrow functions, template literals, destructuring, default parameters, and more. Here are some examples of ES6 features:
//1. let and const
let es6Let = "I'm a block-scoped variable (let)";
const es6Const = "I'm a constant variable (const)";
console.log(es6Let);
console.log(es6Const);  
//2. Arrow Functions
const add = (a, b) => a + b;
console.log("Arrow Function Add: " + add(5, 3));
//3. Template Literals
const nameTemplate = "Dave";
const greeting = `Hello, ${nameTemplate}! Welcome to ES6.`;
console.log(greeting);
//4. Destructuring
const person = { firstName: "Eve", lastName: "Johnson" };
const { firstName, lastName } = person;
console.log(`Destructured Name: ${firstName} ${lastName}`);
//5. Default Parameters
const multiply = (x, y = 2) => x * y;
console.log("Multiply with Default Parameter: " + multiply(5));
//6. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread Operator Array: " + arr2.join(", "));
//7. Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }   
}
const dog = new Animal("Dog");
dog.speak();
console.log("Class Example: " + dog.name);
//8. Promises
const fetchData = () => {   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);   
    });
};
fetchData().then(data => console.log(data));
//9. Modules (Note: This example assumes a module system is in place)
//export const myModule = () => { console.log("This is a module"); };
//import { myModule } from './myModule.js';
//myModule();
//These are just a few of the many features introduced in ES6. Embracing these features can help you write cleaner, more efficient, and more maintainable JavaScript code. 
//ES6 features
