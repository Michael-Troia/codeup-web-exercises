function breaking(num) {
    let output = '';
    while (true) {
        var number = prompt("Choose an odd number between 1-50.");
        if (number % 2 === 1) {
            break;
        }
    }
    // return ("Number to skip is: " + Number(number))
    for (let i = 1; i <= 49; i++) {
        if (i % 2 !== 0 && i !== Number(number) && i < 49) {
            output += "Here is an odd number: " + i + '\n';
        }
        if (i === Number(number)) {
            output += "Yikes! Skipping number: " + number + '\n';
            continue;
        }
        if (i === 49) output += "Here is an odd number: " + i;
    }
    var output2 = "Number to skip: " + number + '\n\n';
    output2 += output;
    console.log(output2);
}
