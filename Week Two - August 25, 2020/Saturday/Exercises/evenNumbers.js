/*
Even Numbers
Write a function which takes an array of numbers as input and returns 
a new array containing only the even numbers in the given array.
*/

let testArray = [3, 16, 12, 14, 15, 22] // output should be  [ 16, 12, 14, 22 ]

function evenNumbers(array) {

var evenNumbersArr = [];

for (item in array) {
    currentItem = array[item] // sets the value of variable currentItem to the value of the current index
    if (currentItem % 2 == 0) { evenNumbersArr.push(currentItem) } else { console.log(`odd number found: ${currentItem}`)}
}

return evenNumbersArr; //return new array with all even numbers from original array.

}

console.log(evenNumbers(testArray))