class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        function helper(i){
            if(i === nums.length){
                return [[]];
            }

            const perms = helper(i + 1);
            const resPerms = [];

            for(const perm of perms){
                for(let j = 0; j < perm.length + 1; j++){
                    let permCopy = [...perm];
                    permCopy.splice(j, 0, nums[i]);
                    resPerms.push(permCopy);
                }
            }

            return resPerms;
        }

        return helper(0);
    }
}
