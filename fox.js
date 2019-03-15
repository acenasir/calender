var string = "The Quick Brown Fox Jumped Over The Lazy Dog";
var foxArray = string.split(" ");
var n = 0;
makeButton(n);

function makeButton(){

    this.removeEventListener('click', makeButton, false);

     if(n > foxArray.length - 1) return false;

     var button = document.createElement('button');
     button.innerText = foxArray[n];
     button.addEventListener('click', makeButton);
     button.classList.add('btn');
     button.classList.add('btn-primary');
     button.classList.add('btn-restaurant');

     document.getElementById('buttons').appendChild(button);

     n++;
 }














 // function makeButton(){
 //
 //      // remove listener from button to avoid duplicates
 //      this.removeEventListener('click', makeButton, false);
 //
 //      // stop if we try to add more buttons than words in our string
 //      if(n > foxArray.length - 1) return false;
 //      //alert("here"); alert(foxArray.length - 1);
 //      // create a new node, give it some text, add an event listener
 //      var button = document.createElement('button');
 //      button.innerText = foxArray[n];
 //      button.addEventListener('click', makeButton);
 //      button.classList.add('btn');
 //      button.classList.add('btn-primary');
 //      button.classList.add('btn-restaurant');
 //
 //      // append node to body
 //      document.getElementById('buttons').appendChild(button);
 //
 //      // increment
 //      n++;
 //  }
