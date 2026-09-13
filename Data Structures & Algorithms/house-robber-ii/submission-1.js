class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if (n === 0) return 0;
        if (n === 1) return nums[0];

        function robRange(arr) {
            const cache = new Int32Array(arr.length).fill(-1);

            function dfs(i) {
                if (i >= arr.length) return 0;

                if (cache[i] !== -1) {
                    return cache[i];
                }

                const takeCurrent = arr[i] + dfs(i + 2);
                const skipCurrent = dfs(i + 1);

                cache[i] = Math.max(takeCurrent, skipCurrent);
                return cache[i];
            }

            return dfs(0);
        }

        const robFirstRange = robRange(nums.slice(0, n - 1));
        const robSecondRange = robRange(nums.slice(1));

        return Math.max(robFirstRange, robSecondRange);
    }
}