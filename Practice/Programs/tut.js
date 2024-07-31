// const months = ["Jan", "March", "April", "May", "june"];

// const newMonth = months.splice(months.length, 0, "Dec");
// console.log(months);

// const animals = ["cow", "goat", "ship"];

// animals.push("peacock");
// console.log(animals);

// animals.unshift("Chicken");
// console.log(animals);

// console.log(animals.pop());
// console.log(animals);

// console.log(animals.shift());
// console.log(animals);


// var myEmp = ['Eva', 'Malhar', 'Jija', 'Akshay'];

// for(let elements in myEmp){
//     console.log(elements)
// }

// for(let element of myEmp){
//     console.log(element)
// } 

// myEmp.forEach((element, index, array) => {
//     console.log(element + "index" + index + "" + array)
// });



// var arr = [2, 3, 4, 6, 8];

// for (var i=0; i<=arr.length; i++){
//     var mul = arr[i] * 2
//     if(mul > 10){
//         console.log(mul)
//     }
// }



// let arr = [25, 36, 49, 64, 81];

// for (var i=0; i<=arr.length; i++){
    
// }



// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth, 1, 'March');
//     console.log(months);
// } else {
//     console.log('No Such Data Found');
// }


// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != 1){
//     const updateMonth = months.splice(indexOfMonth, 1)
//     console.log(months)
// } else {
//     console.log('No Such Data Found');
// }


// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//    const updateMonth = months.splice(indexOfMonth, Infinity);
//    console.log(months);
// } else {
//    console.log('No Such Data Found');
// }



// Map() Method

// const array = [1,4,9,16,25];

// const greaterThanNine = array.map((e)=>e > 9);
// console.log(greaterThanNine);


// const arr = [25,36,49,64,81];

// const newArr = arr.map((curElem) =>Math.sqrt(curElem));
// console.log(newArr);


// const arr = [2,3,4,6,8];

// const newArr = arr.filter((e)=>e*2 > 10);
// console.log(newArr);

// reduce() Method

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem, index, arr) => {
//     debugger;
//     return accumulator += curElem;
// })
// console.log(sum);


// *****************************************
// String

// let myName = new String("Srushti Jadhav");
// console.log((myName));

// let myName = "Srushti Jadhav";
// console.log(myName.length);
// console.log(myName.indexOf("Jadhav"));


// Slice() Method

// var str = "Apple, Banana, Kiwi";
// var res = str.slice(0,8);
// console.log(res);



// replace() Method 

let myBioData = `My name is srushti and srushti`;
let replaceData = myBioData.replace('srushti', 'Srushti');
console.log(replaceData);