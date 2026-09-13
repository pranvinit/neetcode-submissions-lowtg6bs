class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Int32Array(s.length + 1).fill(false);
        // Recurrence Relation
        // dp[i] = does i...end form a valid dict word
        dp[s.length] = true;

        for(let i = s.length - 1; i >= 0; i--){
            for(const word of wordDict){
                const n = word.length;
                if(i + n <= s.length && s.slice(i, i + n) === word){
                    dp[i] = dp[i + word.length];
                }
                if(dp[i]){
                    break;
                }
            }
        }

        return !!dp[0];
    }
}
