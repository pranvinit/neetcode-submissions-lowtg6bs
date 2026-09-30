class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let openMin = 0,
            openMax = 0;

        for (const ch of s) {
            if (ch === "(") {
                openMin += 1;
                openMax += 1;
            } else if (ch === ")") {
                openMin -= 1;
                openMax -= 1;
            } else {
                openMin -= 1;
                openMax += 1;
            }

            if (openMax < 0) {
                return false;
            }

            if (openMin < 0) {
                openMin = 0;
            }
        }

        return openMin === 0;
    }
}
