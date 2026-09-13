class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Array(s.length);

        const dfs = (i) => {
            // base case - complete string segmented
            if(i === s.length) return true;

            if(memo[i] !== undefined){
                return memo[i];
            }

            for(const word of wordDict){
                if(s.startsWith(word, i) && dfs(i + word.length)){
                    memo[i] = true;
                    return true;
                }
            }

            memo[i] = false;
            return false;
        }

        return dfs(0);
    }
}
