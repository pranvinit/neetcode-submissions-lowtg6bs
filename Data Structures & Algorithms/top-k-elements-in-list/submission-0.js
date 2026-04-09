class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const result = [];

        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        return Object.keys(count)
            .sort((a, b) => count[b] - count[a])
            .slice(0, k)
            .map(Number);    }
}
