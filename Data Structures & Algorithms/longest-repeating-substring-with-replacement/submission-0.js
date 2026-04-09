class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0,
            length = 0,
            maxFreq = 0;
        let freq = new Map();
    

        for(let r = 0; r < s.length; r++){
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);
            maxFreq = Math.max(freq.get(s[r]), maxFreq);

            while((r - left + 1) - maxFreq > k){
                freq.set(s[left], freq.get(s[left]) - 1);
                left++;
            }

            length = Math.max(r - left + 1, length);
        }

        return length;
    }
}