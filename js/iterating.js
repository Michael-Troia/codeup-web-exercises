    (function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = [
        'Wilma',
        'Bob',
        'Sarah',
        'Ike'
    ];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name,i){
        console.log(names[i]);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var first = function (arr){
        return arr[0];
    }
    var second = function (arr){
        return arr[1];
    }
    var last = function (arr){
        return arr[arr.length-1];
    }

    var numbers = [1,2,3,4,5];

    console.log(first(numbers));
    console.log(second(numbers));
    console.log(last(numbers));
    // console.log(numbers.unshift(numbers.pop()))
    // console.log(numbers.push(numbers.shift()));

    console.log(numbers);
    //todo new functions of arrays: push and pop (add and remove to the front), unshift and shift (to the back)
        // console.log(numbers.unshift(numbers.pop()))
        // console.log(numbers.push(numbers.shift()));

    /*todo .indexof, .lastindex, .slice,
        numbers.indexOf(0);
        >1

        numbers.slice(0,1);
        >(5) todo doesn't change array

        numbers.sort();

    */
        console.log(numbers);

})();
