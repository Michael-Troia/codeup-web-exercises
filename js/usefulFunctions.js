1. filter()
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
2. forEach()
function removeDuplicates(array) {
    let x = {};
    array.forEach(function(i) {
        if(!x[i]) {
            x[i] = true
        }
    })
    return Object.keys(x)
};
Checks to see if each element in the array is unique.

3. Set
function removeDuplicates(array) {
    array.splice(0, array.length, ...(new Set(array)))
};
Creating a new Set stores unique elements from the array. The easiest way in my opinion

4. map()
function removeDuplicates(array) {
    let a = []
    array.map(x =>
    if(!a.includes(x) {
        a.push(x)
    })
    return a
};