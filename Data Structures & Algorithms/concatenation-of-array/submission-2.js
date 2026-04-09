class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const ans = [];

        for (let i = 0; i < 2; i++) {
            for (let i = 0; i < n; i++) {
                ans.push(nums[i]);
            }
        }

        return ans;
    }
}
