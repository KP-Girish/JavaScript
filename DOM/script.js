let button = document.querySelector('button');
button.onclick = (evt)  => {
    console.log("button clicketd");
    console.log(evt.type); //logs the type of event
    console.log(evt.target); //logs the target element  

}