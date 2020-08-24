/*Javascript objects 8/24/2020

Objects:
	Data is stored as key:value pairs
	Variables are called properties
	Functions in an object are called methods
Creating custom objects
    New object constructor
        var ourObject = new "ourObject"();
    object literal notation
        ourObject = {}
>ourObject = {val1: 17, val2:"Hello World"}
>ourObject.val2
>ourObject.val3 = true // creates a new property for ourObject
    properties/methods can be assigned with dots or square brackets

Methods in objects:
>ourObject.do1 = functiion() {
    console.log("hello");
    }
>ourObject.do1(); // prints "hello"

nested objects:*/
var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });

    "use strict";

    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a honk method on the car object
    car.honk = function () {
        alert("Honk! Honk!");
    };

// honk the horn
    car.honk();

    "use strict";

    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a logMakeModel method on the car object
    car.logMakeModel = function () {
        console.log("Car make/model is: " + this.make + " " + this.model);
    };

// log the make/model
    car.logMakeModel();
    console.table()
});
