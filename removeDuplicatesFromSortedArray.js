// link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// solution without comments
var removeDuplicates = function(nums) {
    let pointer1 = 0
    for(pointer2=1; pointer2<nums.length; pointer2++){
        if(nums[pointer2] !== nums[pointer1]){
            pointer1++;
            nums[pointer1] = nums[pointer2]
        }
    }
    return pointer1 + 1
};

// solution with comments

// this solution requires two pointers
// pointer one only moves onto the next value in the array when there are unique values
// pointer two iterates through the array
var removeDuplicates = function(nums) {
    //set pointer one to zero 
    let pointer1 = 0
    // iterate through the nums array started at the element of index 1 (i.e. the second element)
    for(pointer2=1; pointer2<nums.length; pointer2++){
        // if the element that pointer two is pointing at is unique to the one that pointer one is pointing at
        if(nums[pointer2] !== nums[pointer1]){
            // then increment pointer one so it moves along and you can compare the next number
            pointer1++;
            // then set the element at pointer one to the element that was at pointer two
            // so you are essentially comparing what pointer 2 was at to the next number in the array (which pointer 2 will next point at)
            nums[pointer1] = nums[pointer2]
        }
    }

    // in the end as only the beginning of the array is sorted, you should return the value of pointer 1 plus 1 to know how many unique elements there are in the array
    return pointer1 + 1
};