window.onload = init;


function init() {

        var addMilk = document.getElementById("milk");
  addMilk.onclick = milkDisplay;

        var addApples = document.getElementById("apples");
  addApples.onclick = applesDisplay;

        var addCoffee = document.getElementById("coffee");
  addCoffee.onclick = coffeeDisplay;


  }

function milkDisplay() {

  var data = document.forms.data;
  var milk = data.elements.milk;

  var orderDiv = document.getElementById("order");
  var imgMilk = document.createElement('img');


  if (milk.checked == true) {

    imgMilk.src = 'milk.jpg';
    orderDiv.appendChild(imgMilk) ;
  }
}

function applesDisplay() {

  var data = document.forms.data;
  var apples = data.elements.apples;

  var orderDiv = document.getElementById("order");

 if (apples.checked == true) {
    var img = document.createElement('img');
    img.src = 'apples.jpg';
    orderDiv.appendChild(img) ;
   }
}

function coffeeDisplay() {

  var data = document.forms.data;
  var coffee = data.elements.coffee;

  var orderDiv = document.getElementById("order");

   if (coffee.checked == true) {
    var img = document.createElement('img');
    img.src = 'coffee.jpg';
    orderDiv.appendChild(img) ;
   }
}
