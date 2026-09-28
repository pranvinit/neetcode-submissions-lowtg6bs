class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const map = new Map();

        for (const ch of s) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }

        for (const ch of t) {
            if (!map.get(ch)) {
                // handles '0' case
                return false;
            }
            map.set(ch, map.get(ch) - 1);
        }

        return true;
    }
}
