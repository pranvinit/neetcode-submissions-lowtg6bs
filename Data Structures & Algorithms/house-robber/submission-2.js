class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const dp = new Array(n + 2).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            const robCurrent = nums[i] + dp[i + 2];
            const skipCurrent = dp[i + 1];

            dp[i] = Math.max(robCurrent, skipCurrent);
        }

        return dp[0];
    }
}
