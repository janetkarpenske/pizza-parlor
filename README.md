# Pizza Parlor

#### Allows a user to select a pizza and returns the cost. Created On: 8/28/2020, Updated Last: 8/28/2020

#### By Janet Karpenske

## Description

This program allows the user to enter a size and toppings they would like for a pizza into a form and calculates the cost of the pizza using objects and constructors.

## Link To Active Site:
https://janetkarpenske.github.io/pizza-parlor/

## Specifications
| Description | Input Example | Output |
|-------------|---------------|--------|
| Program accepts input from user and passes it to constructor function which creates an object. | let pizza = new Pizza("small", ["cheese", "pepperoni"]) | pizza = {size: "small", toppings = ["cheese", "pepperoni"]} |
| Program calculates the cost of the pizza using the inputted info. | pizza = {size: "small", toppings = ["cheese", "pepperoni"]} | 10 |
| Program displays a summary of pizza and the cost for the user. | this.displayPizzaInfo(); | "You ordered a small pizza with cheese and pepperoni. $10" |
| Program stores multiple pizzas in an order object. | let pizza2 = new Pizza("medium", ["cheese", "tomatoes"]) | order.items[0] = pizza = {size: "small", toppings: ["cheese", "pepperoni"]} |
| Program can display a "shopping cart" that contains all added pizzas. | showShoppingCart(order); | order = {items = [pizza]} |

## Tests
### Test 1
Describe: Pizza() </br>
Test: "It create a pizza object." </br>
Expect(Pizza("small", ["cheese", "pepperoni"])).toEqual(pizza = {size: "small", toppings = ["cheese", "pepperoni"]});
### Test 2
Describe: Pizza.prototype.calcPrice() </br>
Test: "It create a pizza object." </br>
Expect(Pizza.prototype.calcPrice(pizza).toEqual(10);
### Test 3
Describe: Pizza.prototype.displayPizzaInfo() </br>
Test: "It displays the info of a pizza to the console." </br>
Expect(Pizza.prototype.displayPizzaInfo(pizza)).toEqual("You ordered a small pizza with cheese and pepperoni. $10.");
### Test 4
Describe: Order() </br>
Test: "It stores info for multiple pizzas." </br>
Expect(Order.prototype.addToCart(pizza)).toEqual(order = { items = [pizza]});
### Test 5
Describe: showShoppingCart() </br>
Test: "It displays a list of all the orders." </br>
Expect(showShoppingCart(order)).toEqual(order = {items = [pizza]});


## Setup/Installation Requirements

* Download or Clone project from Github repository (click button that says "Clone" or "Download") OR click link to view the active site located in README.md file (see above). 
* If cloned/downloaded: Open index.html file with live server to view webpage, OR open scripts.js, styles.css, or index.html to view code.

## Known Bugs

No Known Bugs

## Support and contact details

https://github.com/janetkarpenske

## Technologies Used

Javascript, HTML, and CSS were used in the creation of this project. Bootstrap and JQuery libraries were also used.

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **Janet Karpenske** _Pizza Parlor_