class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans = '',
            index = 0;
        
        while(word1[index] || word2[index]){
            if(word1[index]){
                ans += word1[index];
            } else {
                ans += word2.substring(index);
                return ans;
            }

            if(word2[index]){
                ans += word2[index];
            } else {
                ans += word1.substring(index + 1);
                return ans;
            }
            index++;
        }

        return ans;

    }
}
