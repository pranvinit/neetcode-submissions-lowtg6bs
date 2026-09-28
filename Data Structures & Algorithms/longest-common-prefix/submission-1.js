class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let len = 0;

        for(let i = 0; i < strs[0].length; i++){
            const ch = strs[0][i];
            let flag = true;
            for(const str of strs){
                if(!str[i] || str[i] !== ch){
                    flag = false;
                    break;
                }
            }

            if(flag) {
                len++;
            } else {
                break;
            }
        }

        return strs[0].substring(0, len)
    }
}
