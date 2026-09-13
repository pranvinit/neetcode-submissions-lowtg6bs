class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array(nums.length * 2);

        for(let i = 0, l = nums.length; i < l; i++){
            ans[i] = nums[i];
            ans[i + l] = nums[i];
        }
        
        return ans;
    }
}
