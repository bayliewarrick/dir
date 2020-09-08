/*Positive Numbers
Write a function which 
takes an array of numbers 
as input and returns a new 
array containing only the 
positive numbers in the given
array.*/

var testArray = [-1, 3, -55, 42, 56]; //numbers less than one: index 0, index 2. positive numbers: 3,42,56


var positive = (item) => { return item > 0 };

function pos(item) {
    return item > 0
}

console.log(testArray.filter(pos));


