class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const memo = {};

        function dfs(i) {
            if (i === s.length) return 1;
            if (s[i] === "0") return 0;

            if (memo[i] !== undefined) {
                return memo[i];
            }

            let ways = dfs(i + 1);

            if (i + 1 < s.length) {
                const twoDigits = Number(s.slice(i, i + 2));
                if (twoDigits >= 10 && twoDigits <= 26) {
                    ways += dfs(i + 2);
                }
            }

            memo[i] = ways;
            return ways;
        }

        return dfs(0);
    }
}
