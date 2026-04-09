class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Set();

        for(let i = 0; i < nums.length; i++){
            if(window.has(nums[i])) return true;
            else window.add(nums[i]);

            if(window.size > k){
                window.delete(nums[i - k]);
            }
        }

        return false;
    }
}
