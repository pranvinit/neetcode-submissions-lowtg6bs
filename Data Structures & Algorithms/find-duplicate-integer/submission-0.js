class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = {};

        for(const num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        return Object.keys(map).reduce((k1, k2) => map[k1] > map[k2] ? k1 : k2);
    }
}
