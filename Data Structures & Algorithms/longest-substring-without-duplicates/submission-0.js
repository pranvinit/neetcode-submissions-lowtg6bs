class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0,
            length = 0;
        
        let window = new Set();
        
        for(let r = 0; r < s.length; r++){
            while(window.has(s[r])){
                window.delete(s[l]);
                l++;
            }
            window.add(s[r]);
            length = Math.max(length, window.size);
        }

        return length;
    }
}
