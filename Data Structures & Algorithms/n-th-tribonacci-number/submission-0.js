class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const memo = {};

        const dfs = (n) => {
            if(n === 0) return 0;
            if(n === 1) return 1;
            if (n === 2) return 1;

            if(n in memo){
                return memo[n];
            }

            const tn = dfs(n - 1) + dfs(n - 2) + dfs(n - 3);
            memo[n] = tn;
            return tn;
        }

        return dfs(n)
    }
}
