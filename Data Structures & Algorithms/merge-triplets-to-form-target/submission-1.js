class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        const found = new Set();

        for (let i = 0; i < triplets.length; i++) {
            const t = triplets[i];
            if (t[0] > target[0] || t[1] > target[1] || t[2] > target[2]) continue;

            for (let j = 0; j < 3; j++) {
                if (t[j] === target[j]) found.add(j);
            }
        }

        return found.size === 3;
    }
}
