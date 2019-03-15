document.getElementById('button1').addEventListener('click', function(){
    var p = document.querySelector('p.example1');
    p.style.color = 'blue';
});

document.getElementById('button2').addEventListener('click', function(){
    var p = document.querySelectorAll('p.example1');
    for(var i=0; i < p.length; i++){
        p[i].style.color = 'red';
        p[i].style.fontWeight = 'bold';
    }
});

document.getElementById('button3').addEventListener('click', function(){
    var parent = document.getElementById('welcome-div');
    // var child = document.getElementById('p1');
    var child = document.querySelector('p.example2');
        parent.removeChild(child);

        document.getElementById('heading1').classList.add('success');

});


document.getElementById('generate').addEventListener('click', function(){
    var headingDiv = document.createElement('div');
    var text = document.createTextNode("About Us");
    headingDiv.appendChild(text);


    var heading3 = document.createElement('h3');
    var text2 = document.createTextNode("This is the About Us header");
    heading3.appendChild(text2);



    var target = document.getElementById('about');
    target.appendChild(headingDiv);
    target.appendChild(heading3);

});
