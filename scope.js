var restaurants = ["Earls", "The Pint", "Subway", "Tim Hortons", "Opa", "MacDonalds", "Burger King"];

for(var i = 0; i < restaurants.length; i++){

    var button = document.createElement('button');
    var text = document.createTextNode(restaurants[i]);
    button.appendChild(text);
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.classList.add('btn-restaurant');

    button.addEventListener("click", function (e){
        alert("I want to eat at " + this.innerText);
    }
);

    var target = document.getElementById('buttons');
    target.appendChild(button);
    //console.log(restaurants[i]);
}
