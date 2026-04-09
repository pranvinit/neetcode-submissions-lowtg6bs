class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for (let num of nums){
            if(map.has(num)) return true;
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        return false;
    }
}
