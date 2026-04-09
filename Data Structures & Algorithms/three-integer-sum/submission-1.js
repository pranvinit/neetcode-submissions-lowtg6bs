class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];
        let i = 0;
        nums = nums.sort((a, b) => a - b);
        while(i < nums.length - 2){
            if (i > 0 && nums[i] === nums[i - 1]) {
                i++;
                continue;
            };
            let j = i + 1;
            let k = nums.length - 1;
            while(j < k){
                const sum = nums[i] + nums[j] + nums[k];
                if(sum === 0){
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j - 1]) j++;
                    while(j < k && nums[k] === nums[k + 1]) k--;
                } else if (sum < 0){
                    j++;
                } else {
                    k--;
                }
            }
            i++;
        }
        return res;
    }
}
