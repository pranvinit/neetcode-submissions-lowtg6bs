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
                    
                    helper();
                    count[num]++;
                    perm.pop();
                }
            }
        }

        helper();
        return res;
    }
}
