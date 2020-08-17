// /*'use strict';
//
// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//
// //do while loop
// TODO a do/while is evaluated at the end of the loop instead of the begininng,
// TODO will always execute the body at least once
// var i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);
// //for loop
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
//
// // break out of a loop
//
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }
//
// //continuing a loop
//
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }*/
//
// for (var i = 1; i < 100; i++) {
//     if (i%3 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//     console.log('Here is a lovely even number: ' + i);
// }
// function exampleOfRetruningFromLoop() {
//     let output = ''
//     for (let i=0; i < 10; i++) {
//         output += "iteration " + i
//         if (i !== 9) output += '\n'
//     }
//     return output;
// }
// console.log(exampleOfRetruningFromLoop)
// console.log(exampleOfRetruningFromLoop())

(function returnMultiplicationTable(aNumber) {
    return aNumber.toString();
    let output = '';
    for (i =1 ; i < 11; i++){
        output += (aNumber + " x " + i + " = " + (aNumber * i));
        if (aNumber !== 10) output += "\n";
    }
    alert(output);
    return output;
})()