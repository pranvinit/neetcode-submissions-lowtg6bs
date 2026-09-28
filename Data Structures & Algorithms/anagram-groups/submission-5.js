class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const count = new Array(26).fill(0);

            for (const ch of str) {
                const idx = ch.charCodeAt(0) - 97;
                count[idx]++;
            }

            const key = count.join("#");

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
