class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Set();

        for(let l = 0; l < nums.length; l++){

            if(window.size > k){
                window.delete(nums[l - k - 1]);
            }

            if(window.has(nums[l])) return true;
            else window.add(nums[l]);
        }

        return false;
    }
}