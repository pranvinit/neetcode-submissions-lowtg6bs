class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const map = {};

        for(let i = 0; i < arr.length; i++){
            const c = Math.abs(x - arr[i]);
            map[i] = c;
        }

        return Object.keys(map).sort((k1, k2) => map[k1] - map[k2]).slice(0, k).map(i => arr[i]).sort((a,b) => a-b);
    }
}
