// Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
// For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
// For the test cases, the parameter num will be any number from 1 to 1000


var num = 4;
var sum = 0;
function simpleAdd(num){
    for(var i=0; i<=num; i++){
        sum += i;
    }
    console.log(sum)
}
console.log(simpleAdd(num))