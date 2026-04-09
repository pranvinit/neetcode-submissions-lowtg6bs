class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0,
            length = Infinity;

        let left = 0;

        for(let right = 0; right < nums.length; right++){
            sum += nums[right];
            
            while (sum >= target){
                const currentLength = right - left + 1;
                length = Math.min(currentLength, length);

                sum -= nums[left]; // slide window right
                left++;
            }
        }

        return length === Infinity ? 0 : length;
    }
}
