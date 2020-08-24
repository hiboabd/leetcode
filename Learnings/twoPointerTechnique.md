## Two Pointer Technique 

Used for searching pairs in a sorted array. 

Ordering the data structue helps to reduce the time complexity of just one loop with two pointers and search each item just one time.

There are two approaches:

1) Opposite directional: One pointer represents the first element and another pointer represents the last element of the array. 

2) Equi-directional: Both start from the beginning. One is a slow runner and the other is a fast runner. 

## Example one: Opposite directional. Two Sum II. 

Given an array of integers that is already sorted in ascending order. Find two numbers such that they add up to a specific target number. 

The function twoSum should return indices of the two numbers such that they add up to the target where index1 must be less than index2. 

```js
function twoSum(array, target){
    let startPointer = 0 
    let endPointer = array.length - 1 
    let result = new Array(2)

    while(start < end){
        let sum = nums[start] + nums[end]

        if(sum === target){
            result[0] = nums[start]
            result[1] = nums[end]
            break
        } else if(sum < target){
            startPointer++
        } else {
            endPointer--
        }
    }
    return result 
}
```
