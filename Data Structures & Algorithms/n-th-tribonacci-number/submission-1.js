class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const cache = new Int32Array(n + 1).fill(-1);

        const dfs = (n) => {
            if(n === 0) return 0;
            if(n === 1) return 1;
            if (n === 2) return 1;

            if(cache[n] !== -1){
                return cache[n];
            }

            const tn = dfs(n - 1) + dfs(n - 2) + dfs(n - 3);
            cache[n] = tn;
            return tn;
        }

        return dfs(n)
    }
}
