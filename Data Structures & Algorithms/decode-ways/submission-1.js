class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length;
        const dp = new Int32Array(n + 1).fill(0);

        // mark - valid way to decode
        dp[n] = 1;

        for (let i = n - 1; i >= 0; i--) {
            if (s[i] === "0") {
                dp[i] = 0;
                continue;
            }

            dp[i] = dp[i + 1];

            if (i + 1 < n && Number(s.slice(i, i + 2)) <= 26) {
                dp[i] += dp[i + 2];
            }
        }

        return dp[0];
    }
}