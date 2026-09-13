class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            // for odd length
            let l = i,
                r = i;
            while (l >= 0 && r <= s.length && s[l] === s[r]) {
                ++res;
                l -= 1;
                r += 1;
            }

            // for even length
            ((l = i), (r = i + 1));
            while (l >= 0 && r <= s.length && s[l] === s[r]) {
                ++res;
                l -= 1;
                r += 1;
            }
        }

        return res;
    }
}
