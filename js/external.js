alert("Welcome to my website!");

var question1 = "What's you're favorite color?";
var answer1 = prompt(question1);
alert("Wow, I also appreciate the color " + answer1);

var answer2 = prompt("So, how many days are you renting the little mermaid?");
alert(answer2 + " days? That's a lot, kid.");

var answer3 = prompt("How about Brother Bear?");
alert(answer3 + " ? Well I hope you liked it more than me!");

var answer4 = prompt("And Hercules?");
alert("Only " + answer4 + "? It's a classic.");

var totalPrice = 3 * (+answer4 + +answer3 + +answer2);
alert("That'll be $" + totalPrice);

//2

var answer5 = prompt("Alright, how many hours did I work for Google this week?");

var answer6 = prompt("How many hours at Amazon again?");

var answer7 = prompt("Now how long did I work at Facebook this week?");

var google = 400 * answer5;
var amazon = 380 * answer6;
var facebook = 350 * answer7;

var paycheck = google + amazon + facebook;
alert("Wow. I only made $" + paycheck + " this week.");

//3

/*var answer8 = prompt("Is the class full?");
var answer9 = prompt("Is is there a conflict with your schedule?");
if ((answer8.includes('y' || 'Y') || (answer9.includes('y' || 'Y')))){
    alert("Then I'm afraid you can't register for this class.")
} else {
    alert("Then hurry up and register already!");
}*/

var classCapacity = 30;
var registeredStudent = 20;
var classDoesNOTConflict = confirm("Press OK if the class does not conflict with your schedule.")
var canEnroll = (classCapacity > registeredStudent) && classDoesNOTConflict;
alert("Able to enroll: " + canEnroll)


// 4

var offerNOTExpired = confirm("Press ok if the offer is not expired.");
var numberItems = prompt("How many items are you purchasing?");
var premiumMembership = confirm("Press ok if you are a premium member.");
var offerApplied = (numberItems > 2 || premiumMembership) && offerNOTExpired;
alert("Offer applied: " + offerApplied)