// myObject = {name: "Srushti", id: 101, fruit: "Mango", flower: "Rose"}

// console.log(myObject)
// console.log(myObject.name)
// console.log(myObject.id)
// console.log(myObject.fruit)
// console.log(myObject.flower)

// myObject["message"] = "Hello"
// console.log(myObject)


// Que: Find Unique Numbers

// var array = [1, 2, 3, 4, 1, 2, 4, 8];
// var myAnswer = {}

// for(var i=0; i<array.length; i++){
//     // console.log(myAnswer[array[i]])
//     if(myAnswer[array[i]] === undefined){
//         myAnswer[array[i]] = 1
//         console.log(array[i])
//     }
// }



// Find Count of Unique Numbers



// var array = [1, 2, 3, 4, 1, 2, 4, 8];
// var myAnswer = {}

// for(var i=0; i<array.length; i++){

//     if(myAnswer[array[i]] === undefined){
//         myAnswer[array[i]] = 1
//         console.log(array[i])
//     }else{
//         myAnswer[array[i]]++
//     }
// }
// console.log(myAnswer)



// Que: Find Even Numbers

var array = [1, 2, 3, 4, 5, 1, 2, 6];
var myAnswer = {}

for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        if (myAnswer[array[i]] === undefined) {
            myAnswer[array[i]] = 1
        } else {
            myAnswer[array[i]]++
        }
    }
}
console.log(myAnswer)


// var array = [1, 2, 1, 3, 4, 5, 2, 3, 5, 1];
// var myAnswer = {}

// for (var i = 0; i < array.length; i++) {
//     // console.log(myAnswer[array[i]])
//     if (myAnswer[array[i]] === undefined) {
//         myAnswer[array[i]] = 1
//     } else {
//         myAnswer[array[i]]++
//     }

// }

// console.log(myAnswer)