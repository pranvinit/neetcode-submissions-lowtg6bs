class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate = nums[0],
            count = 0;

        for(const num of nums){
            if(count === 0) candidate = num;
            count += (num === candidate) ? 1 : -1;
        }

        return candidate;
    }
}
