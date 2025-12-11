//what is an event?
//An event is an action or occurrence that happens in the system you are programming, which the system tells you about so your code can respond to it.
//Examples of events include user interactions like clicks, key presses, mouse movements, and form submissions, as well as system-generated events like page load, network responses, and timers.
//Events are a fundamental part of programming in environments like web browsers, where they allow developers to create interactive and dynamic applications by responding to user actions and other occurrences.

//Types of events in JavaScript 
//1. Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove
//2. Keyboard Events: keydown, keyup, keypress
//3. Form Events: submit, change, focus, blur
//4. Window Events: load, resize, scroll, unload
//5. Touch Events: touchstart, touchmove, touchend, touchcancel 
//6. Clipboard Events: copy, cut, paste
//7. Media Events: play, pause, ended, volumechange
//8. Drag and Drop Events: dragstart, dragover, drop, dragend   
//Adding Event Listeners
//You can add event listeners to HTML elements using the addEventListener method. This method takes two arguments: the type of event to listen for and a callback function that will be executed when the event occurs.
let button = document.createElement('button');
button.innerText = "Click Here"; 

//what is event object?
//The event object is a special object that is automatically passed to event handler functions in JavaScript. It contains information about the event that occurred, such as the type of event, the target element, and other relevant details.
//You can use the event object to get more context about the event and to control its behavior.
//Example of using event object

//two ways to add event listener
// 1) Inline Event Handling --> this is wrighting in html code wiht onclick attribute
// 2) through JavaScript node -->this is writing in side js file

// another way to add event is event listener 
//syntex : node.addEventListener(event, callback);