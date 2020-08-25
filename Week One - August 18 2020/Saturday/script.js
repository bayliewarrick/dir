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
    return console.log(subtotal * tipPercent + ' dollars is the appropriate tip amount.')
};


function totalAmount(billAmount, service) {
    return billAmount += (tipAmount(billAmount, service))
}

console.log(totalAmount(100, 'good'))


