class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0];
        let curSum = 0;

        for(const n of nums){
            curSum = Math.max(curSum, 0);
            curSum += n;
            max = Math.max(max, curSum);
        }

        return max;
    }
}
