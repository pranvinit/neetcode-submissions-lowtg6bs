class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        for(let L = 0; L < nums.length; L++){
            for(let R = L + 1; R <= L + k && R < nums.length; R++){
                if(nums[R] === nums[L]) return true;
            }
        }
        return false;
    }
}