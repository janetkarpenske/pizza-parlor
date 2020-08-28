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

  let pizza = new Pizza("small", toppings = ["cheese", "pepperoni"]);
pizza.displayPizzaInfo();