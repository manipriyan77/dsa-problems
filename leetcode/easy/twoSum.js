/**
 * 1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

function towSum(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return;
      }
    }
  }

  return result;
}

towSum([2, 7, 11, 15], 9);

// ALTERNATE APPROCACH optimized

function optimizedTwoSum(nums, target) {
  const numMap = {}; // Create an empty object to store the numbers and their indices.

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return [];
}
