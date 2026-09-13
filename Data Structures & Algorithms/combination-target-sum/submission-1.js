class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let curSet = [];

        function helper(i, total){
            if(total === target){
                res.push([...curSet]);
                return;
            }

            if(i >= nums.length || total > target) return;

            // include nums[i]
            curSet.push(nums[i]);
            helper(i, total + nums[i]);
            curSet.pop();

            // exclude nums[i]
            helper(i + 1, total);
        }
        helper(0, 0)
        return res;

    }
}
