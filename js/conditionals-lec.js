/*"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = false;
if (isAdmin === true) {
    //show nav
}
//TODO Together: Send a 20% off coupon if its users birthday
var birthday = true;
if (birthday) {
    //send coupon
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = false;
if(isRainy) {
    alert("Rain!");
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var itemCost = 300;
var currentBalance = 200;
if(currentBalance <= itemCost) {
    alert("Not enough money!");
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 0;
if(numberOfLives === 0) {
    alert("Sorry, game over");
    alert("Continue?");
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = "snowing";
if(weather === "snowing") {
    alert("It\'s snowing!");
}

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 5;
if(numberInput > 10) {
    alert(true);
}

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
function checkWeatherAnon(weather) {
    if(weather === "snowing") {
        alert("snow!");
    }
}

var checkWeatherNamed = function(weather) {
    if(weather === "snowing") {
        alert("snow!")
    }
}



// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = false;
if (isAdmin) {
    alert("showing admin navbar");
} else {
    alert("showing non-admin navbar");
}


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
var isRainy = true;
if(isRainy) {
    alert("it's raining");
} else {
    alert("Have a nice day!");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
var numberOfLives = 5;
if(numberOfLives === 0) {
    alert("Game over. Continue?");
} else {
    alert("Next level!");
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
var weather = "snowing";
if (weather === "snowing") {
    alert("It's snowing!");
} else {
    alert("Check back later for more details!");
}


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
var numberInput = 11;
if (numberInput > 10) {
    alert(true);
    alert("number: " + numberInput);
} else {
    alert("The number is less than 10");
}


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkifGameIsOver(numberOfLives) {
    if (numberOfLives === 0) {
        alert("game over");
    } else {
        alert("Next level!");
    }

}


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
(function oldEnough() {
    if (confirm("Are you 13 or older?")) {
        alert("You're old!");
    } else {
        alert("You're not old!");
    }
})()



// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if
// weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining",
// alerts "have a nice day" for all other cases
var weather = "snowing";
if (weather === "snowing") {
    alert("It's snowing!");
} else if (weather === "raining") {
    alert("It's raining");
} else {
    alert("Have a nice day!");
}


//TODO Together: refactor the above statement as a function
var weathermanSays = function(weather) {
    if (weather === "snowing") {
        alert("It's snowing!");
    } else if (weather === "raining") {
        alert("It's raining");
    } else {
        alert("Have a nice day!");
    }
}*/

// weathermanSays("empty")// should alert have a nice day

//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user what to do when
// approaching that color light at an intersection.

// var color = prompt("What color is the light?")
// function lookinForMyChapstick() {
//     if (color === "green") {
//         alert("Go");
//     } else if (color === "yellow") {
//         alert("slow down");
//     } else if (color === "red") {
//         alert("Stop");
//     } else {
//         alert("get some help");
//     }
// }
// lookinForMyChapstick()
//



//
// // ================ NESTED STATEMENTS ===============
// //TODO Together: If user is under 15, they are not eligible for a learners permit, else they are.
// // If they are eligible, check age. If they are 15 they are eligible for a learners permit,
// // if they are 16 or older and have a permit, they are eligible for license,
// // if they are 16 or older and do not have a permit, they are not eligble for a license.
// var age = prompt('what is your age?');
// var permit = confirm('do you have a permit?');
// function theLicenceCheck() {
//     if (age < 15) {
//         alert('can not get permit');
//     } else {
//         if (age == 15) {
//             alert('can get permit');
//         } else if (age >= 16 && permit == true) {
//             alert('get a licence!');
//         } else {
//             alert('you need a permit first!');
//         }
//     }
// }
// theLicenceCheck()



// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary
// (condition) ? does if true : or else do this
/*var message;
var success = true;
//
//*/
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


//WRITE YOUR TERNARY STATEMENT HERE!
/*(success) ? message = "opertation was successful." : message = "Something went wrong.";
console.log(message)

//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
// console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE! TODO THIS IS AWESOME
weatherMessage = (weather === "rainy") ? "it's raining" : "Have a nice day!";*/


/*function checkIfGameIsOver(numberOfLives) {
    if (numberOfLives === 0) {
        alert("sorry, game over");
    } else {
        alert("next level!");
    }
}*/
var numberOfLives = 0;
alert((numberOfLives === 0) ? "sorry game over" : "next level!");

// =============== SWITCH STATEMENT ================
//TODO Together:
// switch (condition) {
//     case 0:
//         // code here
//         break;
//     case 1:
//         // code here
//         break;
//     default:
//         // code similar to else
// }

pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else if (pizzaPreference === "ham") {
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
function startOrder(pizzaPreference) {
    switch (pizzaPreference) {
        case "cheese":
            alert("yum, cheese")
            break;
        case "pineapple":
            alert("yum! My favorite too!");
            break;
        default:
            alert("Well at least you like pizza!");
    }
}




//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var theWeather = prompt("is it 'rainy', 'sunny' or 'snowy'?");
switch (theWeather) {
    case 'rainy':
        alert("rain, go away!")
        break;
    case 'sunny':
        alert("Here comes the sun, doodoo doo doo")
        break;
    case 'snowy':
        alert("*John Mayer voice* 'Snow day, snow dayyyy'")
        break;
    default:
        alert("What, you can't follow directions?");
}


//TODO: Rewrite the intersection function from earlier as a switch statement.
var needAnswer = true;
do {
    switch (prompt("what color is the traffic light?")) {
        case "green":
            alert("go")
            needAnswer = false;
            break;
        case "yellow":
            alert("slow down")
            needAnswer = false;
            break;
        case "red":
            alert("stop")
            needAnswer = false;
            break;
        default:
            alert("huh?")
    }
} while(needAnswer);


// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

