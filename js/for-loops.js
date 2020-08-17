function returnMultiplicationTable(aNumber) {
    // return aNumber.toString();
    let output = '';
    for (i = 1; i < 11; i++){
        output += (aNumber + " x " + i + " = " + (aNumber * i));
        if (i !== 10) {
            output += "\n";
        }
    }
    return output;
}

var evenOrOdd;
var rand = random;
function returnEvenOddMessage(aNumber) {
    let output1 = '';
    if (aNumber % 2 === 0) {
        output1 += (aNumber + " is " + " even");
        evenOrOdd = "even";
    } else {
        output1 += (aNumber + " is " + " odd");
        evenOrOdd = "odd";
    }
    return output1.toString();
}


function returnTenEvenOddMessages() {
    let output3 = '';
    returnEvenOddMessage(rand);
    for (i = 1; i < 11; i++) {
        output3 += (rand + " is " + evenOrOdd)
    }
    console.log(output3);
    return output3;
}