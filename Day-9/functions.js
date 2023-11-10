// Basic Function Program
function addition(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1 + num2)
}
addition();


function numbers(firstNum, secondNum){
    console.log(firstNum, secondNum)
}
numbers(40,50);

function threeNumbers(number1, number2, number3){
    console.log(number1, number2, number3)
}
threeNumbers(10,20,30);

function addTwoNumbers(num3,num4){
    console.log(num3+num4)
}
addTwoNumbers(20,20,20)

// Find Target using function

var array = [2, 4, 5, 9, 8, 7];
var target = 8;

function findTarget(target, array) {
    // console.log(target, array)
    var flag = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == target) {
            console.log("We got it.")
            flag = true;
        }
    }
    if (flag == false) {
        console.log("Not found.")
    }
}
findTarget(target, array)


function functionOne() {
    console.log("First") // only print
    console.log("Second")
    return "Hi from function"
}

functionOne()


function addition(num1, num2) {
    // console.log(2 + 3) // it only print the passed value

    return num1 + num2  // it return the passed value
}

var answer = addition(2, 3)  // addition function gonna return a value which we are storing into varible
console.log(answer)



function test() {
    console.log("Test 1")
    return "hii" // end statement,, block stops
    console.log("Test 2")
}

test()


function FindEven(number) {
    if (number % 2 == 0) {
        return "Number is even" 
    } else {
        return "Number is odd"
        console.log("hii")
    }
    console.log("hii")
}

console.log(FindEven(3))


function Find(number) {
    if (number % 2 == 0) {
        return "Number is even"
    }
    console.log("hiii")
    if (number > 10) {
        return "NUMBER IS GREATER THAN 10"
    }
}

console.log(Find(14))


