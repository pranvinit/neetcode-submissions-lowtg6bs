class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let res = 0;

        const backtrack = (i, currentXor) => {
            if(i === nums.length){
                res += currentXor;
                return;
            }

            // decision to include nums[i]
            backtrack(i + 1, currentXor ^ nums[i]);

            // decision to not include nums[i]
            backtrack(i + 1, currentXor);
        }

        backtrack(0, 0);
        return res;
    }
}
