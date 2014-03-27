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
  imgMilk.setAttribute("id", 1);
  imgMilk.src = 'milk.jpg';

  if (milk.checked == true) {
    orderDiv.appendChild(imgMilk);
  }
  else {
    imgMilk = document.getElementById(1);
    orderDiv.removeChild(imgMilk);
  }
}

function applesDisplay() {

  var data = document.forms.data;
  var apples = data.elements.apples;

  var orderDiv = document.getElementById("order");
  var imgApple = document.createElement('img');
  imgApple.setAttribute("id", 2);
  imgApple.src = 'apples.jpg';

 if (apples.checked == true) {

    orderDiv.appendChild(imgApple);
   }
  else {
    imgApple = document.getElementById(2);
    orderDiv.removeChild(imgApple);
  }

}

function coffeeDisplay() {

  var data = document.forms.data;
  var coffee = data.elements.coffee;
  var orderDiv = document.getElementById("order");
  var imgCoffee = document.createElement('img');
  imgCoffee.setAttribute("id", 3)
  imgCoffee.src = 'coffee.jpg';

   if (coffee.checked == true) {
    orderDiv.appendChild(imgCoffee) ;
   }
  else {
    img = document.getElementById(3);
    orderDiv.removeChild(img);
  }

}
