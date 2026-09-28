class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const count = new Array(101).fill(0);
        for (const h of heights) count[h]++;

        let diff = 0;
        let cur = 0; // current height

        for (const h of heights) {
            while (count[cur] === 0) cur++; // skip exhausted heights
            if(h !== cur) diff++;
            count[cur]--;
        }

        return diff;
    }
}
