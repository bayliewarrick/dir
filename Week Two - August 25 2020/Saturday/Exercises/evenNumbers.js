/*
Even Numbers
Write a function which takes an array of numbers as input and returns 
a new array containing only the even numbers in the given array.
*/


let testArray = [3, 16, 12, 14, 15, 22] // output should be  [ 16, 12, 14, 22 ]

var mapFunction = function(item) {
    console.log(`mapping item: ${item}`)
    if(item % 2 == 0) { return item }
}

var newArr = testArray.map(mapFunction)

var cleanedArr = 
    newArr.filter(function(item) {
           return item % 2 == 0
    })


console.log(testArray) //original array
console.log(cleanedArr) //parsed array, filtered out all odd numbers :D