class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = {};

        function dfs(i) {
            if (i >= nums.length) {
                return 0;
            }

            if(i in cache) return cache[i];

            const max = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
            cache[i] = max;
            return max;
        }

        return dfs(0);
    }
}
