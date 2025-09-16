//what is conditonal statements?
//Conditional statements are used to perform different actions based on different conditions.
//In JavaScript, we have several types of conditional statements:
//1. if statement
//2. if...else statement
//3. else if statement
//4. switch statement
//5. ternary operator
//6. try...catch statement

//Example of if statement   
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
//Example of if...else statement
let number = 10;
if (number % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number + " is an odd number.");
}
//Example of else if statement
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}   
//Example of switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}   
//Example of ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount:", discount); 
//Example of try...catch statement
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed.");
    }   
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}
//In this example, we check if the result of the division is finite. If not, we throw an error which is then caught in the catch block.
//This is how conditional statements work in JavaScript.
//They help in making decisions in the code based on different conditions.
//Conditional statements are essential for controlling the flow of a program and making it dynamic based on user input or other factors.
//Conditional statements are fundamental in programming and are widely used in various applications.
//They allow developers to create complex logic and handle different scenarios effectively.
//By using conditional statements, we can ensure that our code behaves as expected under different conditions.
//Understanding and mastering conditional statements is crucial for any JavaScript developer.
//With practice, you can become proficient in using conditional statements to build robust and efficient applications.
//These are some of the key points about conditional statements in JavaScript.
//Feel free to experiment with different conditions and statements to see how they work in practice.
//Happy coding!