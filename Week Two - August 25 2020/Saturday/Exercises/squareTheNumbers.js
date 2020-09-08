/*
    Square the Numbers
    Write a function which takes an array of numbers as input and returns a new array containing
    result of squaring each of the numbers in the given array by two. 
    Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].
*/

const originalArray = [1, 3, 55, 42, 56]; //numbers less than one: index 0, index 2. positive numbers: 3,42,56


const square = (arr) => {
    var newArr = [];
     arr.forEach(item => {
        newArr.push(item * item)
     })
    return newArr
}


console.log(square(originalArray))