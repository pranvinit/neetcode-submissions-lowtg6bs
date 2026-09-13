class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];
        let curSet = [];

        function helper(i) {
            if (curSet.length === k) {
                res.push([...curSet]);
                return;
            }

            if (i > n) {
                return;
            }

            curSet.push(i);
            helper(i + 1);
            curSet.pop();

            helper(i + 1);
        }

        helper(1);

        return res;
    }
}
