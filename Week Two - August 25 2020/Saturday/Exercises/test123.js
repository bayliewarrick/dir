var array = [1,2,3,4,5]

var newArr = array.map(item => {
    console.log(item < 5)
})

var newArr2 = array.filter(item => {
    console.log(item < 5)
})