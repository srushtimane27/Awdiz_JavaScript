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