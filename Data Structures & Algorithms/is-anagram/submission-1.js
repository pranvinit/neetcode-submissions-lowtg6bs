class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};

        for(const c of s){
            map[c] = (map[c] ?? 0) + 1;
        }

        for(const c of t){
            if(!map[c]) return false;
            else {
                map[c]--;
            }
        }

        return Object.values(map).every(v => v === 0);
    }
}
