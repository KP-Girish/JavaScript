//String in JavaScript
// A string in JavaScript is a sequence of characters used to represent text. Strings are one of the most commonly used data types in programming and are essential for handling and manipulating textual data. In JavaScript, strings are enclosed in either single quotes (' '), double quotes (" "), or backticks (` `) for template literals. Here are some key aspects of strings in JavaScript:
// 1. Creating Strings:
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let templateLiteralString = `Hello, World!`;
// 2. String Properties and Methods:
let sampleString = "JavaScript is fun!";
console.log(sampleString.length); // Outputs: 18
console.log(sampleString.toUpperCase()); // Outputs: "JAVASCRIPT IS FUN!"
console.log(sampleString.toLowerCase()); // Outputs: "javascript is fun!"
console.log(sampleString.indexOf("fun")); // Outputs: 15
console.log(sampleString.slice(0, 10)); // Outputs: "JavaScript"
console.log(sampleString.replace("fun", "awesome")); // Outputs: "JavaScript is awesome!"
// 3. Template Literals:
//what is template literal in javascript
// Template literals are a way to embed expressions within string literals, allowing for easier string interpolation and multi-line strings. They are enclosed in backticks (` `) and can include placeholders indicated by the ${expression} syntax.
let name = "Alice";
let age = 25;
let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting); // Outputs: "My name is Alice and I am 25 years old."
// 4. String Concatenation:
let str1 = "Hello, ";   
let str2 = "how are you?";
let combinedString = str1 + str2;
console.log(combinedString); // Outputs: "Hello, how are you?"
// 5. Escape Characters:
let stringWithQuotes = 'He said, "It\'s a beautiful day!"';
console.log(stringWithQuotes); // Outputs: He said, "It's a beautiful day!"
let stringWithNewLine = "Hello,\nWorld!";
console.log(stringWithNewLine);
//string trim in javascript
let stringWithSpaces = "   Hello, World!   ";
console.log(stringWithSpaces.trim()); // Outputs: "Hello, World!"
//Sring charAt in javascript
console.log(sampleString.charAt(0)); // Outputs: "J"
console.log(sampleString.charAt(5)); // Outputs: "c"
// String includes in javascript
console.log(sampleString.includes("is")); // Outputs: true
console.log(sampleString.includes("Java")); // Outputs: true
console.log(sampleString.includes("fun!")); // Outputs: true
// String split in javascript
let wordsArray = sampleString.split(" ");
console.log(wordsArray); // Outputs: ["JavaScript", "is", "fun!"]
// String concatenation using concat() method
let concatenatedString = str1.concat(str2);
console.log(concatenatedString); // Outputs: "Hello, how are you?"

// Outputs:
// Hello,
// World!
// In summary, strings in JavaScript are versatile and powerful tools for handling text. They come with a variety of built-in methods that make it easy to manipulate and work with textual data in different ways. Whether you're creating simple messages or complex templates, understanding how to use strings effectively is essential for any JavaScript developer.
// Strings are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones using various string methods. This immutability ensures that strings remain consistent and reliable throughout your code.
// Overall, strings are a fundamental data type in JavaScript and are widely used in web development, user interfaces, and data processing. Mastering string manipulation is crucial for building dynamic and interactive applications.
// They are essential for tasks such as displaying messages, handling user input, and working with text-based data formats like JSON and XML.
// In summary, strings in JavaScript are versatile and powerful tools for handling text. They come with a variety of built-in methods that make it easy to manipulate and work with textual data in different ways. Whether you're creating simple messages or complex templates, understanding how to use strings effectively is essential for any JavaScript developer.
// Strings are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones using various string methods. This immutability ensures that strings remain consistent and reliable throughout your code.
// Overall, strings are a fundamental data type in JavaScript and are widely used in web development, user interfaces, and data processing. Mastering string manipulation is crucial for building dynamic and interactive applications.
// They are essential for tasks such as displaying messages, handling user input, and working with text-based data formats like JSON and XML.
// In summary, strings in JavaScript are versatile and powerful tools for handling text. They come with a variety of built-in methods that make it easy to manipulate and work with textual data in different ways. Whether you're creating simple messages or complex templates, understanding how to use strings effectively is essential for any JavaScript developer.