//DOM Document Object Model
// waht is DOM?
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//DOM Methods   
// Select elements by their class name

// Select an element by its ID
const elementById = document.getElementById('myElement');

//window object
// The window object represents the browser window and provides methods to interact with it.
window.alert("Hello, World!");  
console.log("Window width: " + window.innerWidth);

//Dom Manupulation
// Change the text content of an element
const myElement = document.getElementById('myElement');
myElement.textContent = "New Text Content";

// how many ways to select elements in DOM?
// There are several ways to select elements in the DOM, including:
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll
// 6. getElementsByName

// Example of querySelector
const firstParagraph = document.querySelector('p');
firstParagraph.style.color = 'blue';    
// Example of querySelectorAll
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => p.style.fontSize = '18px');
// Example of getElementsByClassName
const items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'yellow';
}
// Example of getElementsByTagName
const divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].style.border = '1px solid black';
}   
// Example of getElementsByName
const radios = document.getElementsByName('gender');
radios.forEach(radio => radio.checked = false);
// These methods provide flexibility in selecting and manipulating DOM elements based on different criteria.

//DOM properties
// Some common DOM properties include:
// 1. innerHTML - gets or sets the HTML content of an element
// 2. textContent - gets or sets the text content of an 
// 3. innerText - gets or sets the visible text content of an element
// 4.tagName - gets the tag name of an element

// Dom Manipulation example
const header = document.getElementById('header');
header.innerHTML = "<h2>New Header Content</h2>";
header.style.color = "red";
console.log("Header Tag Name: " + header.tagName);
// Example of textContent
const paragraph = document.getElementById('paragraph');
paragraph.textContent = "This is the updated text content.";
console.log("Paragraph Text Content: " + paragraph.textContent);
 // get innerTest anf set innnerTest
const info = document.getElementById('info');
info.innerText = "This is the visible text content.";
console.log("Info Inner Text: " + info.innerText);      

