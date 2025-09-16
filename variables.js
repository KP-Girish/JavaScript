//what is variables
//Variables are used to store data values in a program.
var name = "John";
//types of variables in javascript
//1. var 
var age = 30;
console.log("Name: " + name + ", Age: " + age);
//2. let
let city = "New York";
console.log("City: " + city);
//3. const
const country = "USA";
console.log("Country: " + country);
// what is dinamicalyly typed language
//JavaScript is a dynamically typed language, meaning you don't have to declare variable types explicitly.
var dynamicVar = 42; // Initially a number
console.log("Dynamic Variable (number): " + dynamicVar);
dynamicVar = "Now I'm a string"; // Now a string
console.log("Dynamic Variable (string): " + dynamicVar);
//Variable naming rules
//1. Variable names must begin with a letter, underscore (_), or dollar sign ($).
//2. Subsequent characters can be letters, digits, underscores, or dollar signs.
//3. Variable names are case-sensitive (e.g., myVar and myvar are different).
//4. Reserved words (like JavaScript keywords) cannot be used as variable names.
var _validName = "Valid";
var $anotherValidName = "Also Valid";
//var 1invalidName = "Invalid"; // Invalid: starts with a digit
//var invalid-name = "Invalid"; // Invalid: contains a hyphen
console.log("Valid Variable 1: " + _validName);
console.log("Valid Variable 2: " + $anotherValidName);
//var var = "Invalid"; // Invalid: 'var' is a reserved word
//console.log("Invalid Variable: " + var); // This line would cause an error    
//Best practices for naming variables
//1. Use meaningful names that describe the purpose of the variable.
//2. Use camelCase for multi-word variable names (e.g., myVariableName).
//3. Avoid using single-letter names except for loop counters (e.g., i, j).
//4. Be consistent with your naming conventions throughout your code.
var userAge = 25; // Meaningful name
var totalPrice = 99.99; // Meaningful name
console.log("User Age: " + userAge);
console.log("Total Price: " + totalPrice);
//5. Avoid using underscores (_) in variable names; prefer camelCase instead.
var firstName = "Alice";
console.log("First Name: " + firstName);
//6. Use plural names for arrays or collections (e.g., users, items).
var items = ["apple", "banana", "cherry"];
console.log("Items: " + items.join(", "));  
//7. Avoid using global variables; prefer local scope to reduce potential conflicts.
function exampleFunction() {
    let localVar = "I'm local";
    console.log(localVar);
}
exampleFunction();
//console.log(localVar); // This line would cause an error because localVar is not defined globally
//8. Comment your code to explain the purpose of complex variables or logic.
// This variable stores the maximum number of users allowed
var maxUsers = 100; 
console.log("Max Users: " + maxUsers);
//9. Regularly review and refactor your variable names to improve code readability and maintainability.
var userCount = 50; // Initial name
console.log("User Count: " + userCount);
userCount = 75;
console.log("Updated User Count: " + userCount);
//10. Avoid using magic numbers; use named constants instead for better clarity.
const MAX_RETRIES = 5;
console.log("Max Retries: " + MAX_RETRIES);
//11. Use descriptive names for boolean variables (e.g., isActive, hasPermission).
let isActive = true;
console.log("Is Active: " + isActive);
let hasPermission = false;
console.log("Has Permission: " + hasPermission);
//12. Avoid using abbreviations unless they are widely understood (e.g., id for identifier).   
var identifier = 12345; // Clear and descriptive
console.log("Identifier: " + identifier);
//var id = 12345; // Less clear
//console.log("ID: " + id); // This line is less descriptive but commonly understood   
//13. Use template literals for string concatenation to improve readability.
let firstNameTemplate = "Bob";
let lastNameTemplate = "Smith";
console.log(`Full Name: ${firstNameTemplate} ${lastNameTemplate}`);
//14. Group related variables into objects or arrays to organize your code better.
let user = {
    firstName: "Charlie",
    lastName: "Brown",
    age: 28
};
console.log(`User: ${user.firstName} ${user.lastName}, Age: ${user.age}`);
//15. Avoid using variables before they are declared to prevent hoisting issues.
//console.log(undeclaredVar); // This line would cause an error
let undeclaredVar = "Now I'm declared";
console.log("Declared Variable: " + undeclaredVar);
//16. Use const by default and only use let when you need to reassign the variable.
const pi = 3.14; // Use const for values that won't change
console.log("Value of Pi: " + pi);
let counter = 0; // Use let for values that will change
counter++;
console.log("Counter: " + counter);
//17. Avoid using nested ternary operators for better code clarity.
let score = 85;
let grade; 
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
}   else {
    grade = 'F';
}    
console.log("Grade: " + grade);
//18. Regularly test your code to ensure variable names and scopes are functioning as expected.
function testVariables() {
    let testVar = "Test";
    console.log("Test Variable: " + testVar);
}
testVariables();
//console.log(testVar); // This line would cause an error because testVar is not defined globally  
//19. Use linters and code formatters to enforce consistent variable naming conventions and styles.
//20. Stay updated with the latest JavaScript features and best practices to improve your coding skills continuously.   
//21. Practice writing clean and maintainable code by following established coding standards and guidelines.
//22. Seek feedback from peers or mentors to improve your variable naming and coding practices.
//23. Continuously refactor and improve your codebase to enhance readability and maintainability over time.
//24. Learn from well-written open-source projects to understand effective variable naming and coding styles.   
//25. Participate in coding communities and forums to share knowledge and learn from others' experiences.
//26. Document your code and variable purposes to aid future maintenance and collaboration. 
//27. Experiment with different coding styles and techniques to find what works best for you.
//28. Stay curious and keep exploring new programming concepts and paradigms to broaden your understanding of coding.
//29. Build projects and practice coding regularly to reinforce your learning and improve your skills.
//30. Enjoy the process of coding and embrace challenges as opportunities to grow and learn as a developer.


//variable scope
//Variable scope refers to the accessibility of variables in different parts of your code. In JavaScript, there are three types of scope: global scope, function scope, and block scope.
var globalVar = "I'm a global variable"; // Global scope   
function scopeExample() {
    var functionVar = "I'm a function variable"; // Function scope
    console.log(globalVar);
    console.log(functionVar);
    if (true) {
        let blockVar = "I'm a block variable"; // Block scope
        console.log(blockVar);
    }
    //console.log(blockVar); // This line would cause an error because blockVar is not accessible outside the block
}
scopeExample();
//console.log(functionVar); // This line would cause an error because functionVar is not accessible outside the function
console.log(globalVar); // Accessible anywhere in the code
//Variable hoisting
//Variable hoisting is a JavaScript mechanism where variable declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.
console.log(hoistedVar); // Output: undefined (declaration is hoisted, but not the initialization)
var hoistedVar = "I'm hoisted!";
console.log(hoistedVar); // Output: I'm hoisted!
//Note: Variables declared with let and const are not hoisted in the same way as var. Accessing them before their declaration will result in a ReferenceError.
//Temporal Dead Zone (TDZ)
//The Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const cannot be accessed before their declaration within their scope. Attempting to do so results in a ReferenceError.
function tdzExample() { 
    //console.log(tdzVar); // This line would cause a ReferenceError
    let tdzVar = "I'm in the TDZ!";
    console.log(tdzVar); // Output: I'm in the TDZ!
}
tdzExample();
//console.log(tdzVar); // This line would cause a ReferenceError because tdzVar is not defined globally
