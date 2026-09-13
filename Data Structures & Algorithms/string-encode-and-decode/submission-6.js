class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let output = "";

        for (let str of strs) {
            output += str.length + "#" + str;
        }

        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0,
            j = 0;
        const res = [];
        while (i < str.length) {
            j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = Number(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + length));
            i = j + 1 + length;
        }

        return res;
    }
}