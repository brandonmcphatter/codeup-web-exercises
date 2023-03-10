"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my website!");

let favColor = prompt("What's your favorite color?");
console.log(favColor);

alert("Really?! " + favColor.toUpperCase() + " is my favorite color, too!");

// Exercise 3

// Movie Rentals

var dailyRentalRate = 3;

alert("There will be a $3/day charge for each movie rented. Enjoy!")

var littleMermaid = Number(prompt("How many days do you want to rent The Little Mermaid?"));
console.log(littleMermaid, "day rental of The Little Mermaid");

var brotherBear = Number(prompt("How many days do you want to rent Brother Bear?"));
console.log(brotherBear, "day rental of Brother Bear");

var hercules = Number(prompt("How many days do you want to rent Hercules?"));
console.log(hercules, "day rental of hercules");

var totalRentalCost = (littleMermaid + brotherBear + hercules) * dailyRentalRate;
console.log(totalRentalCost);

alert("Your total is $" + totalRentalCost);
console.log("The total is $" + totalRentalCost);

// Working Contractor

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var gHours = Number(prompt('How many hours did you work at Google this week? ($400/hr)'));
console.log("Made $" +googleRate * gHours + " at Google.");
alert('Google Pay = $' + (googleRate*gHours));
var amazHours = Number(prompt('How many hours did you work at Amazon this week? ($380/hr)'));
console.log("Made $" + amazonRate * amazHours + " at Amazon.");
alert('Amazon Pay = $' + (amazonRate * amazHours));
var fbHours = Number(prompt('How many hours did you work at Facebook this week? ($350/hr)'));
console.log("Made $" + facebookRate * fbHours + " at Facebook.");
alert('Facebook Pay = $' + (facebookRate * fbHours));
var weeklyPay = (googleRate * gHours) + (amazonRate * amazHours) + (facebookRate * fbHours);
console.log("You made $" + weeklyPay + " this week. Big moneyyyyy!");
alert("Your pay for this week totals out to: $" + weeklyPay);

// Enrolled Students

alert('Welcome to Codeup Web Develeopment School!');
var name = prompt('What is your name?');
var isClassNotFull = confirm('Would you like a vacant spot in the 2023 class?');
var isNotConflicting = confirm('Is your schedule free of conflicts from 9a-5p on M-f?');
var canEnroll = isClassNotFull && isNotConflicting;
var cantEnroll = !isClassNotFull || !isNotConflicting;
if (canEnroll) {
    alert('Congratulations ' + name + '!');
}
if (cantEnroll){
    alert(". Maybe next year!" + "Sorry, " + name)
}

// Product Offer

alert('Thank you for shopping at Costco!')
alert('Please proceed to check if you are eligible for our limited time holiday discount :)')
var isExpired = false
var moreThanTwo = confirm('Do you have more than two items in your cart?');
var premiumMember = confirm('Are you a COSTCO PREMIUM member?');
var productOffer = (moreThanTwo || premiumMember);
if (productOffer === true) {
    alert("Enjoy your discount!");
}   else {
    alert("Sorry but this offer is unavailable to you at this time.");
}






