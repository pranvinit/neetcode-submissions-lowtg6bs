class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {};

        for(const num of nums){
            map[num] = (map[num] ?? 0) + 1;
        }

        for(const key in map){
            if(map[key] > nums.length/2){
                return key;
            }
        }
    }
}
