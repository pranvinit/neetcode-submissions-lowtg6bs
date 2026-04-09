class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0,
            r = nums.length - 1,
            res = nums.length;

        while(l <= r){
            let m = Math.floor((l + r) / 2);
            if(nums[m] < target){
                l = m + 1;
            } else if (nums[m] > target){
                res = m;
                r = m - 1;
            } else {
                return m;
            }
        }

        return res;
    }
}
