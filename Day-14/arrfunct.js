// Pre-Defined Array Functions

// map     -> returned array of values
// foreach => seperate values
// reduce  => single value
// filter  -> array of values but filtere

// 1. Map

var array = [1, 2, 3, 4]
console.log(array,"array")

var result = array.map((number) => number * 2)
console.log(result, "result")

// 2. ForEach

var arraytwo = [1, 2, 3, 4, 5];
console.log(arraytwo,"Array")

arraytwo.forEach((number) => console.log(number * 3))

// Reduce

const arrayThree = [1,2,3,4,5];

const initialValue = 10;
const sumWithInitial = arrayThree.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial,"Sum: ");

// Filter

var list = ["srushti","akshay","hello world","welcome"];
var result = list.filter((str) => str.length < 8)
console.log(result,"result")


setTimeout(() => {
    console.log("Hello")
}, 3000)



setTimeout(() => {
    console.log("Hello")
    console.log("My Name is Srushti")
}, 3000)

var counter = 0;
const message = setInterval(() => {
    counter++;
    console.log(counter)
}, 1000)

clearInterval(message)
