// var array = [2, 4, 5, 1, 6, 3]
// const result = array.map((num) => num > 5)
// console.log(result)


// var array = [1, 5, 4, 3, 1, 2, 8]
// const res = array.forEach((number) => console.log(number))
// console.log(res,"res")


// *************************************************************************************************************
// PUSH : adds the specified elements to the end of an array

// var array =[1,2,4,5,7,8]

// const count = array.push(6)
// console.log(count,"newIndex")
// console.log(array)

// *************************************************************************************************************

// POP: Removes last element from an array

// var array =[1,2,3,4,5]
// // array.pop()
// console.log(array.pop())
// console.log(array)


// ******************************************************************************************************************


// UNSHIFT

// var array = [1, 2, 3]

// array.unshift(5)
// array.unshift(4)
// console.log(array)

// **************************************************************************

// SHIFT

// var array = [1,2,3]

// var deletedPosition = array.shift()
// console.log(deletedPosition, "DeletedPosition")
// // array.shift()
// console.log(array)


// **************************************************************************

// SLICE

// const animal = ['ant', 'bison', 'camel', 'duck', 'elephant']

// console.log(animal.slice(2));
// [ 'camel', 'duck', 'elephant' ]

// console.log(animal.slice(-2));
// [ 'duck', 'elephant' ]

// console.log(animal.slice(1, 5));
// [ 'bison', 'camel', 'duck', 'elephant' ]

// console.log(animal.slice(2, 4));
// [ 'camel', 'duck' ]

// **************************************************************************

// SPLICE

// const array = ['a', 'b', 'c', 'd', 'e'];
// array.splice(index, 0/1, value)
// 0 : To add at index
// 1 : To replace at index

// array.splice(1 , 0, 's')
// console.log(array)
// [ 'a', 's', 'b', 'c', 'd', 'e' ]

// array.splice(4, 1, 'x')
// console.log(array)
// [ 'a', 'b', 'c', 'd', 'x' ]

// **************************************************************************



var name = "Srushti";
var age = 27;

console.log("Welcome", name)
console.log(`Welcome ${name} and your age ${age}`)

// ***************************************************************************


var array1 = [1, 2, 3]
var array2 = [4, 5, 6]

const newArray = array1.concat(array2);
console.log(newArray)

// **************************************************************************

var array = [1, 2, 3]
const isPresent = array.includes(4);
console.log(isPresent)

// **************************************************************************

var alphabet = ["b", "d" , "c", "a"]
console.log(alphabet.sort())

// **************************************************************************

var numbers = [8, 4, 7, 6, 1, 3]
console.log(numbers.sort((a,b) => a - b))
console.log(numbers.sort((a,b) => b - a))

// **************************************************************************

var string = ["abc", "def", "ghi"]
console.log(string.join("-"))
console.log(string.join(" "))
console.log(string.join(""))
console.log(string.join())

// **************************************************************************

var data = "Welcome to HTML, JS, CSS tutorial"
console.log(data.split(" "))

// **************************************************************************

var numbers = [10, 20, 30, 40]
console.log(numbers.at(0))
console.log(numbers.at(3))