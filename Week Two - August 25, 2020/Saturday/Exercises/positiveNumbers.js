/*Positive Numbers
Write a function which 
takes an array of numbers 
as input and returns a new 
array containing only the 
positive numbers in the given
array.*/

let testArray = [1, 2, -2, 14, -52, 68, 13, -7, 0]

function positiveNumbers(array) {

var positiveNumbersArr = [];

array.forEach(item => { //for EACH item in given array, do something

    if(item != 0) { //check if a zero is in the given index of the array.
        if(item > 0) { positiveNumbersArr.push(item) } else { console.log(`negative number given: ${item}`) } //add positive numbers to a new array, OR print negative number to console.
    } else {
        console.log('zero') //if zero is given
    }
    
})
return(positiveNumbersArr) //returns array of all positive numbers from original array.
}

console.log(positiveNumbers(testArray))