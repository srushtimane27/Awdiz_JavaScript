// for(var i=0; i<=30; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// for(var i=0; i<=6; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// var count = 0;
// for(var i=10; i<=20; i++){
//     if(i%2 != 0){
//         console.log(i)
//         count++
//     }
// }
// console.log("count : ", count)

// var oddCount = 0;
// var evenCount = 0;

// for(var i=0; i<=20; i++){
//     if(i%2 != 0){
//         console.log(i, "odd")
//         evenCount++
//     }else{
//         console.log(i, "even")
//         oddCount++
//     }
// }
// console.log("oddCount: ", oddCount)
// console.log("evenCount: ", evenCount)


// var oddNum = [];
// for(var i=0; i<=10; i++){
//     if(i%2 != 0){
//         oddNum.push(i)
//     }
// }
// console.log(oddNum,'list')

// var evenNum = [];
// for(var i=0; i<=20; i++){
//     if(i%2 == 0){
//         evenNum.push(i)
//     }
// }
// console.log(evenNum,'list')


// var array = [2,4,1,5,6,9,8,1,0]
// var target = 9;
// var flag = false;

// for(var i=0; i<array.length; i++){
//     if(array[i] == target){
//         console.log("Number Found",i)
//         flag = true;
//     }
// }
// if(flag = false){
//     console.log("Number not found")
// }


// var array = [1, 2, 3, 4, 5];
// var target = 5;

// for(var i=0; i<array.length; i++){
//     for(var j=i+1; j<array.length; j++){
//         if(array[i] + array[j] == target){
//             console.log(array[i],array[j])
//         }
//     }
// }

// var array = [1, 4, 5, 8, 3, 2, 6]

// var target = 6;

// for(var i = 0; i < array.length - 2; i++){
//     for(var j = i + 1; j < array.length - 1; j++){
//         for(var k = j + 1; k < array.length; k++){
//             // console.log(array[i], array[j], array[k])
//             if (array[i] + array[j] + array[k] == target){
//                 console.log(array[i], array[j], array[k])
//                 console.log([i, j, k])
//             }
//         }
//     }
// }


// for(i=0; i<=20; i++){
//     if(i%2 != 0){
//         console.log(i)
//     }
// }

// var count = 0;
// for(i=10; i<=20; i++){
//     if(i%2 == 0){
//         console.log(i)
//         count++
//     }
// }
// console.log(count)

// var evenCount = 0;
// var oddCount = 0;

// for(var i=0; i<=20; i++){
//     if(i%2 != 0){
//         console.log(i, "Odd")
//         oddCount++
//     }else{
//         console.log(i, "Even")
//         evenCount++
//     }
// }


// var evenNumber = [];

// for(i=0; i<=20; i++){
//     if(i%2 == 0){
//         evenNumber.push(i)
//     }
// }
// console.log(evenNumber,"list")

// var oddNumber = [];

// for(i=0; i<10; i++){
//     if(i%2 != 0){
//         oddNumber.push(i)
//     }
// }
// console.log(oddNumber,"list")

// var array = [2, 4, 6, 8, 9]
// target = 10;
// var flag = false;

// for(var i=0; i<array.length; i++){
//     if(array[i] == target){
//         console.log("Number Found")
//         flag = true;
//     }
// }
// if(flag == false){
//     console.log("number not found")
// }


// var array = [1, 2, 5, 1, 3]
// target = 3;

// for(var i=0; i<array.length; i++){
//     for(var j=i+1; j<array.length; j++){
//         if(array[i] + array[j] == target)
//         console.log(array[i],array[j])
//     }
// }

// var array = [1, 2, 5, 1, 3]
// target = 8;

// for(var i=0; i<array.length-2; i++){
//     for(var j=i+1; j<array.length-1; j++){
//         for(var k=j+1; k<array.length; k++){
//             if(array[i] + array[j] + array[k] == target){
//                 console.log(array[i],array[j],array[k])
//                 console.log([i,j,k])
//             }
//         }
//     }
// }

function add(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1 + num2)
}
add();

function num(num1,num2){
    console.log(num1,num2)
}
num(10,20);






