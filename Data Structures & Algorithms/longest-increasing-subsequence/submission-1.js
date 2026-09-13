class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const n = nums.length;
        const memo = new Array(n);

        const dfs = (i) => {
            if(memo[i] !== undefined){
                return memo[i];
            }

            let longest = 1;

            for(let j = i + 1; j < n; j++){
                if(nums[j] > nums[i]){
                    longest = Math.max(
                        longest,
                        1 + dfs(j)
                    )
                }
            }

            memo[i] = longest;
            return longest;
        }

        let answer = 0;
        for(let i = 0; i < n; i++){
            answer = Math.max(answer, dfs(i));
        }

        return answer;
    }
}
