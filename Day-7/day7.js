//Q.1 Print odd numbers between given range
// for( var i=26; i<=50; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

//Q.2 Print odd numbers and their count    o/p - 12
// var count = 0;
// for( var i=26; i<=50; i++){
//     if(i % 2 != 0){
//     //    console.log(i)
//        count++
//     }
// }
// console.log(count)


//Q.3 Print odd number count and even number count
// var oddCount = 0;
// var evenCount = 0;

// for(var i = 25; i<=50; i++){
//     if(i % 2 != 0){
//         oddCount++;
//     } else{
//         evenCount++;
//     }
// }
// console.log(oddCount, "odd count")
// console.log(evenCount, "even count")


//Q.4 Store odd numbers into an array

// var oddNumbers = [];
// for(var i = 25; i <= 50; i++){
//     if(i % 2 != 0){
//         oddNumbers.push(i)
//     }
// }
// console.log(oddNumbers, 'list')


//Q.5 Push even numbers into an array

// var numbers = [10,25,33,40,53,65,77,84];
// var evenArray = [];

// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         evenArray.push(numbers[i])
//     }
// }
// console.log(evenArray)

//Q.6 

// var array = [2, 4, 1, 8, 24, 64, 458, 1, 2, 4]
// var target = 24;
// var flag = false;
// for(var i=0; i<array.length; i++){
//     if(array[i] == target){
//         console.log("Number Found")
//         flag = true;
//     }
// }
// if(flag = false){
//     console.log("Number Not Found")
// }


// Q.7

// var array = [1, 2, 3, 4, 5];
// var target = 5;
// for(var i=0; i<array.length; i++){
//     for(var j=i+1; j<array.length; j++){
//         if (array[i] + array[j] == target){
//             console.log(array[i],array[j])
//         }
//     }
// }
