function Order() {
  this.items = [];
}
Order.prototype.addToCart = function(pizza) {
  this.items.push(pizza);
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings
  this.price = this.calcPrice();
}
Pizza.prototype.calcPrice = function() {
  let pizzaCost = 0;
  if (this.size === "small") {
    pizzaCost += 8;
  }
  if (this.size === "medium") {
    pizzaCost += 12;
  }
  if (this.size === "large") {
    pizzaCost += 15;
  }
  pizzaCost += (this.toppings.length * 1)
  return pizzaCost;
}
Pizza.prototype.displayPizzaInfo = function() {
  // $(".result").text("You ordered a " + this.size + " pizza with " + this.toppings + ".");
  console.log("You ordered a " + this.size + " pizza with " + this.toppings.join(", ") + ".");
}
function showShoppingCart(order) {
  order.items.forEach(function(item) {
    console.log("Size: " + item.size);
  });
}
//USER INTERFACE---------------------------------------------------
let order = new Order();
$(document).ready(function() {
  $("form#pizzaType").submit(function(event) {
    event.preventDefault();

    $("#viewCartBtn").show();

    const size = $("#size").val();
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      const checkedToppings = $(this).val();
      toppings.push(checkedToppings);
    });
    let pizza = new Pizza(size, toppings);
    order.addToCart(pizza);
  })
})

//BELOW: Used for testing functions--------------------------------  
  // order.items[1].displayPizzaInfo();
  // showShoppingCart(order);