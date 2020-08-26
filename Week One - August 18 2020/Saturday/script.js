//Hello, you!

function hello(name) {
    console.log(`Hello, ${name}`)
};

hello('baylie');





//Madlib

function madlib(name, subject) {
    console.log(`${name}'s favorite subject in school is ${subject}.`)
};

madlib('Baylie', 'CompSci')



//tipAmount calculator

function tipAmount(subtotal, level) {
    let tipPercent; //declare tip amount as a variable, so we can change the value later.
    if(level == 'good') { tipPercent = .20 }            
        else if(level == 'fair') { tipPercent = .15 } 
        else if(level == 'bad') { tipPercent = .10 }
        else { console.log('incorrect input') }
    return subtotal * tipPercent
};

tipAmount(100, 'good')

//function to return total amount, tip calculator 2

function totalAmount(billAmount, service) {
    return tipAmount(billAmount, service) + billAmount
}

console.log(totalAmount(100, 'good'))

//tip calculator 3

function splitAmount(billAmount, level, numBills) {
    let totalBill = totalAmount(billAmount,level)
    return totalBill / numBills
}

console.log(splitAmount(100,'good', 3))

//print numbers

printNumbers = (a, b) => {

    /*FOR loop version
    for(a; a<=b; a++)  {
        console.log(a)
    }
    */

    while(a <= b) {
        console.log(a)
        a+=1;
    }

}

printNumbers(1, 10)

//print a square

function printSquare(l) {
    //l represents length of side.
    for(index = 0; index < l; index++) {
        console.log('*'.repeat(l))
    }
}

printSquare(5)