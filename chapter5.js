// Question 1
var numone = 5;
var numtwo = 3;
document.write("The sum of 5 and 3 is" + " " + (numone + numtwo) + "<br>");

// Question 2
var numone = 5;
var numtwo = 3;
document.write("The substraction of 5 and 3 is" + " " + (numone - numtwo) + "<br>");

var numone = 5;
var numtwo = 3;
document.write("The multiplication of 5 and 3 is" + " " + (numone * numtwo) + "<br>");

var numone = 5;
var numtwo = 3;
document.write("The division of 5 and 3 is" + " " + (numone / numtwo) + "<br>");

var numone = 5;
var numtwo = 3;
document.write("The modulus of 5 and 3 is" + " " + (numone % numtwo) + "<br>" + "<br>");

// Question 3
// a. Declare a variable
var myVariable;

// b. Show the value of variable after declaration
document.write("Value after variable declaration is: " + myVariable + "<br>"); //output undifined

// c. Initialize the variable with some number
myVariable = 5;

// d. Show the value of variable after initialization
document.write("Initial value: " + myVariable + "<br>"); // Output: 5

// e. Increment the variable
myVariable++;

// f. Show the value of variable after increment
document.write("Value after increment is: " + myVariable + "<br>"); // Output: 6

// g. Add 7 to the variable
myVariable = myVariable + 7;

// h. Show the value of variable after addition
document.write("Value after addition is: " + myVariable + "<br>"); // Output: 13

// Step: Variable declaration and initialization
var value;  // variable declared but not initialized
document.write("Value after variable declaration is: " + value + "<br>");

value = 5;  // initial value assigned
document.write("Initial value: " + 5 + "<br>");

// Increment the variable by 1
value++;
document.write("Value after increment is: " + value + "<br>");  // should be 6

// Add 7 to the variable
value = value + 7;
document.write("Value after addition is: " + value + "<br>");  // should be 13

// i. Decrement the variable by 1
value--;

// j. Show the value after decrement
document.write("Value after decrement is: " + value + "<br>");  // should be 12

// k. Show the remainder after dividing by 3
var remainder = value % 3;

// l. Output the remainder
document.write("The remainder is: " + remainder + "<br>" + "<br>");

// Question 4
var movieticket = 600;
document.write("Total cost to buy 5 tickets to a movie is" + " " + (movieticket * 5) + "PKR" + "<br>" + "<br>");

// Question 5
var number = 4;

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>" + "<br>");
}

// Question 6
// a. Store a Celsius temperature into a variable
var celsius = 25;

// b. Convert it to Fahrenheit & output “30°C is 86°F”
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F" + "<br>");

// c. Now store a Fahrenheit temperature into a variable
fahrenheit = 70;

// d. Convert it to Celsius & output “86°F is 30°C”
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C" + "<br>" + "<br>");

// Question 7
document.write("<b>Shopping Cart</b>" + "<br>");
document.write("Price of item 1 is 650" + "<br>");
document.write("Quantity of item 1 is 3" + "<br>");
document.write("Price of item 2 is 100" + "<br>");
document.write("Quantity of item 2 is 7" + "<br>");
document.write("Total cost of your your order is" + " " + (650 * 3 + 100 * 7 + 100)+ "<br>"+ "<br>");

// Question 8
document.write("<b>Marksheet</b>" + "<br>" );
var totalmarks = 980;
var obtainedmarks = 804;
document.write("Total Marks:980" + "<br>");
document.write("Obtained Marks:804" + "<br>");
document.write("Percentage:" + " " + obtainedmarks / totalmarks * 100 + "%" + "<br>" + "<br>");


// Question 9
document.write("<b>Currency in PKR</b>" + "<br>");
// 10 usdollars
var usdollar = 104.80;
// 25 saudi riyal
var saudiriyal = 28;
document.write("Total currency:" + " " + usdollar * 10 + saudiriyal * 25 + "<br>");

// Question 10
var number = 2
document.write(number + 5 * 10 / 2 + "<br>" + "<br>");

// Question 11
document.write("<b>Age Calculator</b>" + "<br>")
var currentyear = 2025;
var birthyear = 2008;
document.write("Current year:2025" + "<br>");
document.write("Birth year:2008" + "<br>");
document.write("Your age is:" + " " + (currentyear - birthyear) + "<br>" + "<br>");

// Question 12
document.write("<b>The Geometeriozer</b>" + "<br>")
var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area+ "<br>"+ "<br>");

// Question 13
document.write("<b>The Lifetime Supply Calculator</b>" + "<br>")
var favoriteSnack = "chocolatechips";

// Step b: Current age
var currentAge = 15;

// Step c: Maximum age
var maxAge = 65;

// Step d: Estimated amount per day
var amountPerDay = 3;

// Step e: Calculate total amount for the rest of life
var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * 365 * amountPerDay;

// Output the result
document.write("Favourite snacks:chocolate chips"+ "<br>");
document.write("Current age:15"+ "<br>");
document.write("Estimated Maximum age:65"+ "<br>");
document.write("Amount of snacks per day:3"+ "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack +
    " to last you until the ripe old age of " + maxAge + "."+ "<br>"+ "<br>");

    













