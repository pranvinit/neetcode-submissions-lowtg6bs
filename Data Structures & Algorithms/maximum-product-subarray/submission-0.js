class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = Math.max(...nums);
        let [curMin, curMax] = [1, 1];

        for (const n of nums) {
            if (n === 0) {
                [curMin, curMax] = [1, 1];
            }

            [curMin, curMax] = [
                Math.min(n * curMax, n * curMin, n),
                Math.max(n * curMax, n * curMin, n),
            ];

            res = Math.max(res, curMax);
        }

        return res;
    }
}
