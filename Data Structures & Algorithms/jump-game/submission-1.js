class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let goal = nums.length - 1;
        let i = nums.length - 2;

        while(i >= 0){
            if(i + nums[i] >= goal){
                goal = i;
            }

            i--;
        }

        return goal === 0;
    }
}
