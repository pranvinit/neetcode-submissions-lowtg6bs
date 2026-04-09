class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0,
            r = heights.length - 1,
            ans = 0;

        while(l < r){
           const water = (r - l) * Math.min(heights[l], heights[r]);
            ans = Math.max(water, ans);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return ans;
    }
}
