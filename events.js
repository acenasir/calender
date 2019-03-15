document.getElementById("slider-image-div").addEventListener("click", alertEvent);
document.getElementById("mouse-enter-leave").addEventListener("mouseenter", setBorder);
document.getElementById("mouse-enter-leave").addEventListener("mouseleave", setBorder);
document.getElementById("mouse-enter-leave").addEventListener("mouseup", alertEvent);
document.getElementById("name-entry").addEventListener("focus", setBorder);
document.getElementById("name-entry").addEventListener("blur", setBorder);
document.getElementById("name-entry").addEventListener("keydown", setBorder);

document.getElementById("name-entry").addEventListener("keyup", function(event){
console.log(event);
    alert('You pressed the: ' + event.key + ' key');

});

document.getElementById("email-entry").addEventListener("change", setBorder);
document.getElementById("myform").addEventListener("submit", block);

function alertEvent(eventType){
    alert((eventType.type).toUpperCase() + " event occured");
}

function block(event){
        alert((eventType.type).toUpperCase() + " event occured");
        event.preventDefault();
}

function setBorder(eventType){
    var currentColor = document.getElementById(this.id).style.borderColor;
    var newColor = "black";

        if(eventType.type == "focus"){
            newColor = "red";
        }
        if(eventType.type == "blur"){
            newColor = "blue";
        }
        if(eventType.type == "keydown"){
            newColor = "green";
        }
        if(eventType.type == "mouseenter"){
            newColor = "red";
        }
        if(eventType.type == "mouseleave"){
            newColor = "orange";
        }
        if(eventType.type == "change"){
            newColor = "orange";
        }
        if(eventType.type == "change"){
            newColor = "orange";
        }

    document.getElementById(this.id).style.border =  "5px solid " + newColor;
}

    document.onkeyup = function(e) {
      if (e.which == 77) {
        alert("M key was pressed");
      } else if (e.ctrlKey && e.which == 66) {
        alert("Ctrl + B shortcut combination was pressed");
      } else if (e.ctrlKey && e.altKey && e.which == 89) {
        alert("Ctrl + Alt + Y shortcut combination was pressed");
      } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
        alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
      }
    };
