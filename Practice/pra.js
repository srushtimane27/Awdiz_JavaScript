// var emp = ["Srushti","Ruchika","Eva","Jija"]
// for(var i=0; i<emp.length; i++){
//     console.log(emp[i],i)
// }

// var id = [1,2,3,4,5,6,7,8,9]
// for(var i=id.length-1; i>=0; i--){
//     console.log(id[i])
// }

// var ide = [10,20,30,40,50]
// for(var i=ide.length-2; i>=0; i-=10){
//     console.log(ide[i])
// }

// var num = [10,20,30,40,50,60,70,80]
// for(var i = num.length - 2; i >= 0; i -= 10){
//     console.log(num[i])
// }

// function addition(num1, num2, num3, num4){
//     return num1 + num2 + num3 + num4
// }
// addition(1,2,3,4)
// console.log(addition)


// console.log("Hello")

// var name = "srushti"
// console.log(name)
// console.log(typeof(name))

// var number = 300;
// console.log(number)
// console.log(typeof(number))

// let a = 10;
// let b = 20;
// let add = a + b;
// console.log("add is: " +add)

// var data1 = ["Srushti", 27, "Mumbai", [1,2,3], 1234]
// console.log(data1)

// var user = ["Akshay" , "Srushti" , "Shloak", "Jidnya"]
// for(var i=0; i<user.length; i++){
//     console.log(user[i],i)
// }
// console.log(user)


// var id = [1,2,3,4,5,6]
// for(var i = id.length - 1; i >= 0; i -= 4){
//     console.log(id[i])
// }

// var num = [1, 2, 3, 4, 5]
// var sum = 0;
// for(var i=0; i<num.length; i++){
//     // console.log(num[i])
//     sum += num[i] 

// }
// console.log("Sum is : " +sum)

// function sumArray() {
//     const newArray = [1, 2, 3, 4, 5];
//     let sum = 0;

//     for (let i = 0; i < newArray.length; i ++) {
//       sum += newArray[i];
//     }

//     return sum;
//   }
//   sumArray();
//   console.log(sumArray());

// function reverseArray(){
//     var array = [10, 20, 30, 40, 50];

//     for(var i = array.lenght - 1; i >= 0; i--) {

//     }
//     return array;
// }
// reverseArray();
// console.log(reverseArray());



// function array(){

//     var arr = [1, 2, 3, 4, 5]
//     for(var i=0; i<arr.length; i++){

//     }
//     return arr;
// }
// array();
// console.log(array());

// function addition(){

//     var a = 10;
//     var b = 10;
//     var c = a + b;
//     return c;
// }
// addition();
// console.log(addition());

// function swap(){
//     var a = 20;
//     var b = 40;

//     temp = a;
//     a = b;
//     b = temp

//     return a,b ;

// }
// swap();
// console.log(swap());



// function primeNumber(){

//     var num = 5;

//     for(var i=0; i<num; i++){

//         if(num % i == 0){
//             console.log("NUmber is not a prime")
//         }
//         else{
//             console.log("Number is prime number")
//         }
//     }

// }
// primeNumber();


// var evenNumbers=[];

// for(var i=0; i<=10; i++)
// {
//     if (i%2 == 0)
//     evenNumbers.push(i)
// }
// console.log(evenNumbers)



// var oddNumbers = [1,2,3,4,5,6,7,8,9,10]
// var newarr = []

// for(var i=0; i<oddNumbers.length; i++){
//     if(oddNumbers[i] % 2 !=0){
//         newarr.push(oddNumbers[i])

//     }
// }
// console.log("newarr" +newarr)

















// console.log(user[3])
// console.log(user[1])
// console.log(user[0])
// console.log(user[1])

// user.push("Jija")
// console.log(user)
// user.push("Eva")
// console.log(user)
// user.push("Srushti")
// console.log(user)
// user.pop();
// console.log(user)


// for (var i=10; i<=30; i+=10){
//     for(var j=20; j<=40; j+=10){
//         console.log(i,j)
//     }
// }

// var array = [1, 2, 3, 4];
// var target = 7;



// // Find Target Value

// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12;

// function findTarget(array, target) {
//     for (var i = 0; i <= array.length; i++) {
//         for (var j = i + 1; j <= array.length; j++) {
//             if (target == array[i] + array[j]) {
//                 console.log(array[i], array[j])
//             }
//         }
//     }
// }
// findTarget(array, target)



// var array = [1, 2, 5, 3, 1, 4]
// var target = 6
// function findTarget(array, target) {
//     for (var i = 0; i < array.lenght - 2; i++) {
//         for (var j = i + 1; j < array.length - 1; j++) {
//             for (var k = j + 1; k < array.length; k++) {
//                 if (target == array[i] + array[j] + array[k]) {
//                     console.log([i, j, k])
//                 }
//             }
//         }
//     }
// }
// findTarget(array, target)


// console.log("hello")

// var array = [2, 4, 6, 8, 55, 85]
// target = 55
// function findTarget(array, target){
//     for(var i=0; i<=array.length; i++){
//         if(array[i] == target){
//             console.log([i])
//         }
//     }
// }
// findTarget(array, target)


// var array = [10, 20, 10, 40, 30, 10];
// var target = 30;

// function findTarget(array, target){
//     for(var i=0; i<array.length; i++){
//         if(array[i] == target){
//             console.log(array[i])
//             // console.log(i + "Index is ")
//         }
//     }
// }
// findTarget(array, target)

// var array = [10, 20, 10, 20, 30]
// var target = 30;

// function findTarget(array, target){
//     for(var i=0; i<array.length; i++){
//         for(var j=0; j<array.length; j++){
//             if(array[i] + array[j] == target){
//                 console.log(array[i],array[j])
//             }
//         }
//     }
// }
// findTarget(array,target)

// var array = [400, 20, 30, 200, 50];
// var heighest = array[0];

// function findLargetst(array,heighest){
//     for(var i=0; i<array.length; i++){
//         if(array[i] > heighest){
//             heighest = array[i]  
//         }
//     }
//     console.log(heighest)
// }
// findLargetst(array,heighest)



// Palindrome

// var myName = "aba"

// // console.log(myName[myName.length - 1])

// function isStringPalindrome(string) {
//     for (var i = 0; i < Math.floor(string.length / 2); i++) { // run 2 times
//         console.log(string[i], string[string.length - 1 - i])
//         if (string[i] !== string[string.length - 1 - i]) {
//             return "Not palindrome"
//         }
//     }
//     return "Its a Palindrome"
// }
// console.log(isStringPalindrome(myName))



// Factorial

// var num = 7;
// var fact = 1;

// function factorial(){
//     for(num; num>1; num--){
//         fact = fact * num;
//     }
//     console.log(fact)
// }
// console.log(factorial())

// *********************************************************************************************************

// Multiply by 3

// var num = 20

// function multiplyBy(num){

//     if(num % 3 == 0){
//         return "number is multiplied by three"
//     } else{
//         return " number is not multiplied bye three"
//     }

// }
// console.log(multiplyBy(num))

// *********************************************************************************************************

// function multiplied(num){
//     if(num % 3 == 0 || num % 7 == 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(multiplied(21))


// *********************************************************************************************************

// function closest(x,y){

//     num1 = 100 - x;
//     num2 = 100 - y;

//     if(num1 < num2){
//         return "num1 is near to 100"
//     }else{
//         return "num2 is near to 100"
//     }

// }
// console.log(closest(90,89))


// *********************************************************************************************************

// var num = 4;
// var sum = 0;
// function simpleAdd(num){
//     for(var i=0; i<=num; i++){
//         sum += i;
//     }
//     console.log(sum)
// }
// console.log(simpleAdd(num))

// *********************************************************************************************************

// for(var i=0; i<=20; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


// *********************************************************************************************************

// var x = 10;
// {
//     var x = 2;
//     console.log(x)
// }
// console.log(x)

// ***********************************************************************************************************

// let x = 10;
// {
//     let x = 5;
//     console.log(x)
// }
// console.log(x)

// *********************************************************************************************************

// const x = 10;
// {
//     const x = 6;
//     console.log(x)
// }
// console.log(x)

// *********************************************************************************************************

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "*";
//     console.log(str.repeat(i));
// }

// *********************************************************************************************************

// let n = 5;
// for(let i=1; i<=n; i++){
//     console.log("*".repeat(i))
// }

// *********************************************************************************************************

// forEach 

// const array = ['a', 'b', 'c'];

// array.forEach((element) => console.log(element));

// *********************************************************************************************************

const items = ["item1","item2", "item3"];
const copyItems = [];

items.forEach((item) => {
    copyItems.push(item);
});

console.log(copyItems)

