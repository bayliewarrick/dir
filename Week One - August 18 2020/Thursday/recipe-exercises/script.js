
//creates a function called marinaraSauce, which takes in one argument, 'cookName'
marinaraSauce = (cookName) => {

/*the function "console.log" will print the data input to the console. in the first console.log, you
* can see that we are adding the parameter 'cookName' to the end of the string.
* and in the other strings, we are concatenating the variables 'two' and 'oneFourth' to the other strings.
*/

    let two = 2
    let oneFourth = '1/4'

    console.log('Hey, ' + cookName + '! This is my marinara sauce recipe!')
    console.log('Heat a medium-large saucepan over medium heat.')
    console.log('Add ' + two + ' tspns of oil and 5 carlic cloves, cook until golden, about ' + two + ' minutes')
    console.log('Add ' + oneFourth + ' cup water, ' + two + ' cans of crushed tomates, and salt and season with black pepper to taste')    
    console.log('Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes')
    console.log('Stir in ' + oneFourth + ' cup roughly chopped fresh basil, salt and pepper as needed.')

}

marinaraSauce('Adam')