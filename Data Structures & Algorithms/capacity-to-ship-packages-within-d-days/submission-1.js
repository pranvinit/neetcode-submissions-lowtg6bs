class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights),
            r = weights.reduce((a, b) => a + b, 0),
            res = r; // best valid answer

        while(l <= r){
            let mid = Math.floor((l + r) / 2),
            ships = 1,
            remaining = mid

            for(let w of weights){
        if (remaining < w) {
                ships++
                remaining = mid
            }
            remaining -= w
            }

            if(ships <= days){
                res = mid;
                r = mid - 1;
            } else if (ships >= days){
                l = mid + 1;
            }
        }

        return res;
    }
}
