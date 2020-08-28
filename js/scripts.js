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
  $("#myCartItems").empty();
  $("#myCart").show();
  order.items.forEach(function(item) {
    if (item.toppings.length == 1) {
      $("#myCartItems").append("<li> 1 " + item.size + " pizza with " + item.toppings.join(", ") + "  -  $" + item.price + "</li>");
    }
    if (item.toppings.length == 0) {
      $("#myCartItems").append("<li> 1 " + item.size + " pizza with no toppings.  -  $" + item.price + "</li>");
    }
    if (item.toppings.length > 1) {
      $("#myCartItems").append("<li> 1 " + item.size + " pizza with " + item.toppings.join(", ") + ".   -  $" + item.price + "</li>");
    }
  });
}
function calcOrderTotal(order) {
  let total = 0;
  order.items.forEach(function(item) {
    total += item.price
  })
  $("#total").text(total);
}
//USER INTERFACE---------------------------------------------------
let order = new Order();
$(document).ready(function() {
  $("form#pizzaType").submit(function(event) {
    event.preventDefault();
    $("#myCart").hide();
    $(".viewCart").show();

    const size = $("#size").val();
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      const checkedToppings = $(this).val();
      toppings.push(checkedToppings);
    });
    let pizza = new Pizza(size, toppings);
    order.addToCart(pizza);
    $("#confirmItemCount").text(order.items.length);
  })
  $("#viewCartBtn").click(function() {
    showShoppingCart(order);
    calcOrderTotal(order);
  })
})