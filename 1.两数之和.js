/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]
      if (nums.includes(complement) && nums.indexOf(complement) !== i) {
        return [i, nums.indexOf(complement)]
      }
        // const complement = target - nums[i]
        // if (map.has(complement)) {
        //     return [map.get(complement), i]
        // }
        // map.set(nums[i], i)
    }
    return []
};
// @lc code=end

