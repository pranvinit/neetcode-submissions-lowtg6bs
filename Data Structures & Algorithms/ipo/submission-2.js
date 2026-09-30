class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        while (k > 0) {
            const candidates = capital
                .map((c, i) => [profits[i], i, c])
                .filter(([, , c]) => c <= w);

            if (candidates.length === 0) return w;
            const pick = candidates.sort((a, b) => b[0] - a[0]).shift();
            capital.splice(pick[1], 1);
            profits.splice(pick[1], 1);
            w += pick[0];
            k--;
        }

        return w;
    }
}
