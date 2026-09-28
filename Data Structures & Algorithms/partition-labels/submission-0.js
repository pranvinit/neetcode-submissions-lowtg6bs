class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = {};

        for (let i = 0; i < S.length; i++) {
            map[S[i]] = i;
        }

        console.log(map);

        let end = 0;
        let size = 0;
        let output = [];

        for (let i = 0; i < S.length; i++) {
            const lastIdx = map[S[i]];
            if (lastIdx > end) {
                end = lastIdx;
            }
            size += 1;
            if (i === end) {
                output.push(size);
                size = 0;
            }
        }
        return output;
    }
}
