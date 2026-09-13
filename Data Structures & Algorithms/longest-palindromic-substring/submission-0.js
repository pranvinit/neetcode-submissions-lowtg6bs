class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let length = 0;
        let ans = {};

        for (let i = 0; i < s.length; i++) {
            // for odd length
            let l = i,
                r = i;
            while (l >= 0 && r <= s.length && s[l] === s[r]) {
                if (r - l + 1 > length) {
                    length = r - l + 1;
                    ans = { l, r };
                }

                l -= 1;
                r += 1;
            }

            // for even length
            ((l = i), (r = i + 1));
            while (l >= 0 && r <= s.length && s[l] === s[r]) {
                if (r - l + 1 > length) {
                    length = r - l + 1;

                    ans = { l, r };
                }

                l -= 1;
                r += 1;
            }
        }

        return s.substring(ans.l, ans.r + 1);
    }
}
