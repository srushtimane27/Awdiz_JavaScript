// var array = [1,4,105, 9,500]
// var target = 500;
// var flag = false;

// for (var i=0; i<array.length; i++){
//     if(array[i] == target){
//         console.log("Num Found at index " + i)
//         console.log("Num found "  + array[i])
//         flag = true;
//     }
// }
// if(flag == false){
//     console.log("Number not found")
// }


// Find Target Value

var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
var target = 12;

function findTarget(array, target) {
    for (var i = 0; i <= array.length; i++) {
        for (var j = i + 1; j <= array.length; j++) {
            if (target == array[i] + array[j]) {
                console.log(array[i], array[j])
            }
        }
    }
}
findTarget(array, target)