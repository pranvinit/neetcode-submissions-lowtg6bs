class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = [];
        const perm = [];
        const count = {};

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        function helper() {
            if(perm.length === nums.length){
                res.push([...perm]);
                return;
            }

            for(const num in count){
                if(count[num] > 0){
                    perm.push(Number(num));
                    count[num]--;
                    
                    // recurse
                    helper();

                    // backtrack
                    perm.pop();
                    count[num]++;
                }
            }
        }

        helper();
        return res;
    }
}
