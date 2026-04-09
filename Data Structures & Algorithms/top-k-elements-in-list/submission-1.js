class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({length: nums.length + 1}, () => []);
        const res = [];

        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        for(const key in count){
            const val = count[key]; // val maps to frequency
            freq[val].push(Number(key)); // key maps to num
        }
        
        for(let i = freq.length - 1; i >= 0; i--){
            for(const num of freq[i]){
                res.push(num);
                if(res.length === k) return res;
            }
        }
    }
}
