class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let len = 0;

        outer:
        for(let i = 0; i < strs[0].length; i++){
            const ch = strs[0][i];
            for(const str of strs){
                if(str[i] !== ch) break outer;
            }

            len++;
        }

        return strs[0].substring(0, len)
    }
}
