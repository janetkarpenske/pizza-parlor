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

## Tests
### Test 1
Describe: Pizza() </br>
Test: "It create a pizza object." </br>
Expect(Pizza("small", ["cheese", "pepperoni"])).toEqual(pizza = {size: "small", toppings = ["cheese", "pepperoni"]});
### Test 2
Describe: Pizza.prototype.calcPrice() </br>
Test: "It create a pizza object." </br>
Expect(Pizza.prototype.calcPrice("small", ["cheese", "pepperoni"])).toEqual(10);


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