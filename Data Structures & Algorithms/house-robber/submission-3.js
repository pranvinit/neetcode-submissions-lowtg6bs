class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const dp = new Int32Array(n + 2).fill(0);

        dp[n] = 0;
        dp[n - 1] = nums[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            const take = nums[i] + dp[i + 2];
            const skip = dp[i + 1];

            dp[i] = Math.max(take, skip);
        }

        return dp[0];
    }
}
