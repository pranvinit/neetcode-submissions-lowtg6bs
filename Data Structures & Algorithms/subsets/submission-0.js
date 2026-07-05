class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subsets = [];
        let curSet = [];
        this.backtrack(0, nums, curSet, subsets);
        return subsets;
    }

    backtrack(i, nums, curSet, subsets) {
        if (i === nums.length) {
            subsets.push([...curSet]);
            return;
        }

        // decision to include nums[i]
        curSet.push(nums[i]);
        this.backtrack(i + 1, nums, curSet, subsets);
        curSet.pop();

        // decision to not include nums[i]
        this.backtrack(i + 1, nums, curSet, subsets);
    }
}
