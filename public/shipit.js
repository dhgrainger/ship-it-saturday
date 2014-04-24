window.onload = init;

function Item(name, image) {

  this.name = name;
  this.image = image;

  this.buildCheck = function() {
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.name = this.name;
    checkbox.value = this.name;
    checkbox.id = this.name;

    var label = document.createElement('label');
    label.htmlFor ="id";
    label.appendChild(document.createTextNode(this.name))

    var items = document.getElementById("items")

    items.appendChild(checkbox);
    items.appendChild(label);

    box = document.getElementById(name);
    box.addEventListener('click', this.display.bind(this), false);

  }

  this.display = function() {

    var data = document.forms.data;
    var box = document.getElementById(this.name);
    var orderDiv = document.getElementById("order");
    var img = document.createElement('img');

    img.setAttribute("id", this.name + 1);
    img.src = image;

    if (box.checked == true) {
      orderDiv.appendChild(img);
    }
    else {
      img = document.getElementById(this.name + 1);
      orderDiv.removeChild(img);
    }
  }
}

function init() {

  var milk = new Item("milk", "milk.jpg");
  milk.buildCheck();

  var apples = new Item("apples", "apples.jpg");
  apples.buildCheck();

  var coffee = new Item("coffee", "coffee.jpg");
  coffee.buildCheck();

  var detergent = new Item("detergent", "detergent.jpg");
  detergent.buildCheck();

}


  // this.handleClick = function(e){
  //   e.preventDefault();
  //   //handle the click here
  // }

  // $(this.el).on('click', this.handleClick)



// function milkDisplay() {


// }

// function applesDisplay() {

//   var data = document.forms.data;
//   var apples = data.elements.apples;

//   var orderDiv = document.getElementById("order");
//   var imgApple = document.createElement('img');
//   imgApple.setAttribute("id", 2);
//   imgApple.src = 'apples.jpg';

//  if (apples.checked == true) {

//     orderDiv.appendChild(imgApple);
//    }
//   else {
//     imgApple = document.getElementById(2);
//     orderDiv.removeChild(imgApple);
//   }

// }

// function coffeeDisplay() {

//   var data = document.forms.data;
//   var coffee = data.elements.coffee;
//   var orderDiv = document.getElementById("order");
//   var imgCoffee = document.createElement('img');
//   imgCoffee.setAttribute("id", 3)
//   imgCoffee.src = 'coffee.jpg';

//    if (coffee.checked == true) {
//     orderDiv.appendChild(imgCoffee) ;
//    }
//   else {
//     img = document.getElementById(3);
//     orderDiv.removeChild(img);
//   }

// }
