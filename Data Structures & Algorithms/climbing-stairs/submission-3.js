class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Array(n + 2).fill(0);

        dp[n - 1] = 0;
        dp[n] = 1;

        for(let i = n - 1; i >= 0; i--){
            dp[i] = dp[i + 1] + dp[i + 2]
        }

        return dp[0]; // ways from 0th stair (start)
    }
}
