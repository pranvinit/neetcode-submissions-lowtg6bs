class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0,
            r = Math.floor(x / 2),
            res = 0;
        if(x < 2) return x;
        
        while(l <= r){
            let m = Math.floor((l + r) / 2);
            if(m * m === x){
                return m;
            }
            
            if (m * m < x){
                res = m;
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
