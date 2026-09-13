class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        let res = [];
        let curSet = [];

        function helper(i, total) {
            if (total === target) {
                res.push([...curSet]);
                return;
            }

            if (i >= candidates.length || total > target) {
                return;
            }

            // decision to include candidates[i]
            curSet.push(candidates[i]);
            helper(i + 1, total + candidates[i]);

            // backtrack
            curSet.pop();
            
            // skip duplicates
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }

            // decision to not include candidates[i]
            helper(i + 1, total);
        }

        helper(0, 0);
        return res;
    }
}
