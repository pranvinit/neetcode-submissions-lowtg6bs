class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};
        function dp(i){
            if(i === n) return 1;
            if (i > n) return 0;

            const cached = memo[i]
            if(cached){
                return cached
            }

            const ans = dp(i + 1) + dp(i + 2);
            memo[i] = ans;
            return ans;
        }

        return dp(0)
    }
}
