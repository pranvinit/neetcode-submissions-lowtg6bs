class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            const needed = target - nums[i];

            if (seen.has(needed)) {
                return [seen.get(needed), i];
            }

            seen.set(nums[i], i);
        }
    }
}
