var removeDuplicates = function (nums){
    var pointer = 1;
    for (var i=0; i<nums.length-1; i++){
        if(nums[i] !== nums[i +1]){
            nums[pointer] = nums[i+1];
            pointer++;
        }
    }
    return pointer;
};

console.log(removeDuplicates([0,0,0,1,1,1,2,2,2,3,3,4]))