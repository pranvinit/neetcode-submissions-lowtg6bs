class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let L = 0, R = 0;

        while(R < nums.length){
            let count = 1;
            while(R + 1 < nums.length && nums[R] === nums[R + 1]){
                count += 1;
                R++;
            }
            for(let i = 0; i < Math.min(2, count); i++){
                nums[L] = nums[R];
                L++;
            }
            R++;
        }

        return L;
    }
}
