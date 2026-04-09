class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const str of strs){
            const count = new Array(26).fill(0);
            for(const c of str){
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            const key = count.join(',');

            if(!map.has(key)){
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return [...map.values()];
    }
}
