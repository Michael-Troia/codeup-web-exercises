var daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var names = [
    'bob',
    'sally',
    'mike',
    'joey'
];

var indexForToday = 4;
var today = daysOfTheWeek[indexForToday];

//todo level 1 printing an array
for (var i = 0; i < daysOfTheWeek.length; i++) {
    console.log(daysOfTheWeek[i]);
}

//todo level 2
// daysOfTheWeek.forEach(function (day, i ) {
//     console.log((i+1) + ": " +day);
// })

//todo level 3
var forEachCallback = function (item,index,array) {
    console.log((index+1) + ": " + item);
}

daysOfTheWeek.forEach(forEachCallback);



