window.onload = init;

function init() {

        var generateButton = document.getElementById("generateButton");
  generateButton.onclick = generate;

  var clearButton = document.getElementById("clearButton");
  clearButton.onclick = clear;

  }

function generate() {

   var data = document.forms.data;

   var house = data.elements.house.value;
   var name = data.elements.name.value;
   var milk = data.elements.milk;
   var apple = data.elements.apples;
   var coffee = data.elements.coffee;

   var orderDiv = document.getElementById("order");
   orderDiv.innerHTML = " "
   // orderDiv.innerHTML = house + " " + name;

   if (milk.checked == true) {
    var img = document.createElement('img');
    img.src = 'milk.jpg';
    orderDiv.appendChild(img);
   }

  if (apple.checked == true) {
    var img = document.createElement('img');
    img.src = 'apples.jpg';
    orderDiv.appendChild(img);
   }

   if (coffee.checked == true) {
    var img = document.createElement('img');
    img.src = 'coffee.jpg';
    orderDiv.appendChild(img);
   }
 }



