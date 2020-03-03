function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
function getTotalAmount() {
  var selectedValue = parseInt(document.getElementById("size").value);
  var selectedCrust = parseInt(document.getElementById("crust").value);
  var selectedToppings = parseInt(document.getElementById("toppings").value);
  var selectedQuantity = parseInt(document.getElementById("quantity").value);
  var selectedLocation = document.getElementById("location") . value;
  var totalAmount = parseInt((selectedValue + selectedCrust + selectedToppings)*selectedQuantity);
  alert("You have Ordered " + selectedQuantity +  " pizzas" + " selectedLocation "  +  ""  +  " The Total Amount is kshs "  + totalAmount +  ""  +  " Thank you for your order welcome again.");
  alert("You delivery fee is 150/=")
  alert("You order will be delivered shortly ")
  alert("Continue shoppping with us each and every time .")
}