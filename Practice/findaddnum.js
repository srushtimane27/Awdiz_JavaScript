
// function findtarget() {
//     var arr = [1, 2, 3, 1]
//     var target = 5;

//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target){
//                 console.log(arr[i], arr[j])
//             }
//         }
//     }
// }

// findtarget();

// function findtarget(){

//     var array = [1,2,3,6,4]
//     var target = 5;

//     for(var i=0; i<array.length-2; i++){
//         for(var j=i+1; j<array.length-1; j++){
//             for(var k=j+1; k<array.length; k++){
//                 if(array[i] + array[j] + array[k] == target){
//                     console.log(array[i],array[j],array[k])
//                     console.log([i,j,k])
//                 }
//             }
//         }
//     }
// }    
// findtarget();


var array = [1, 4, 5, 8, 3, 2, 6]

var target = 6;

for(var i = 0; i < array.length - 2; i++){
    for(var j = i + 1; j < array.length - 1; j++){
        for(var k = j + 1; k < array.length; k++){
            // console.log(array[i], array[j], array[k])
            if (array[i] + array[j] + array[k] == target){
                console.log(array[i], array[j], array[k])
                console.log([i, j, k])
            }
        }
    }
}
