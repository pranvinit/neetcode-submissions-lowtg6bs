class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b); // sort asc
        let res = [];
        let curSet = [];

        function helper(i) {
            if (i >= nums.length) {
                res.push([...curSet]);
                return;
            }

            // Decision to include nums[i]
            curSet.push(nums[i]);
            helper(i + 1);
            curSet.pop(); // Undo the decision

            // Skip duplicates in the exclude decision
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            helper(i + 1);
        }

        helper(0);
        return res;
    }
}
