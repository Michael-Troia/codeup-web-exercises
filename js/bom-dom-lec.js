// 'use strict';
// // this code will produce a console log every second
// // when count >= max, the interval is cancelled, and the logging will stop
// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
// var intervalId = setInterval(myFunc, interval);
// function myFunc() {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }
// 'use strict';
//
// // this code will produce a console log every second
// // when count >= max, the interval is cancelled, and the logging will stop
//
// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);
//
// //todo sets an alert to appear every 2 seconds a total of 5 times, then logs "all done"
// var count = 0;
// var max = 5;
// var interval = 2000;
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         alert('some alert' + count);
//     }
//
// }, interval);
//
// 'use strict';
//
// var delay = 5000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
// }, delay);
//
// // to cancel the timeout, you can call
// // clearTimeout(timeoutId);
// prior to the delay expiring

location = 'http://www.imdb.com';
var timer = 5000;
var timeoutId = setTimeout(function (){
    location.reload(true);
}, timer);
