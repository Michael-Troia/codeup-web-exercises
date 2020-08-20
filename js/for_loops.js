function returnMultiplicationTable(aNumber) {
    // return aNumber.toString();
    let output = '';
    for (i = 1; i <= 10; i++){
        output += (aNumber + " x " + i + " = " + (aNumber * i));
        if (i !== 10) output += "\n";
    }
    return output;
}

function returnEvenOddMessage(integer) {
    let output1 = '';
    return output1 += integer % 2 === 0 ? (integer + " is even") : (integer + " is odd");
}

function returnTenEvenOddMessages() {
    let output2 = '';
    let arr = [];
    while (arr.length < 10) {
        var r = Math.floor(Math.random() * 200) + 20;
        if(arr.indexOf(r) === -1){
            arr.push(r);
            output2 += returnEvenOddMessage(r);
            if (arr.length !== 10) {
                output2 += "\n";
            }
        }
    }
    console.log(output2);
    return output2;
}

function returnNumberSail(input){
    let output = '';
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            output += i
        }
        if (i < 9) output += '\n'
    }
    return output;
}