class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let res = Array(nums.length).fill(1);

       // res = [1, 3, 5, 4, 5]; // index 3
       // prefix = [1, 1, 3, 15, 60];
       // postfix = [300, 100, 20, 5, 1];

       let prefix = 1;
       for(let i = 0; i < nums.length; i++){
            res[i] = prefix;
            prefix *= nums[i];
       }

       let postfix = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            
            res[i] *= postfix;
            postfix *= nums[i];
       }

       return res;
    }
}